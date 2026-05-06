// POST /api/subscribe — adds an email to the Resend audience.
// Env vars required:
//   RESEND_API_KEY       — Resend API key
//   RESEND_AUDIENCE_ID   — Resend audience UUID (create in Resend dashboard)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) {
    return res.status(500).json({ error: "Email service not configured" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  // Anti-spam: honeypot field must be empty + form must have been on screen for >= 2s
  if (body && body.website && body.website.trim() !== "") {
    return res.status(200).json({ ok: true }); // silent accept; bot thinks it worked
  }
  const startedAt = parseInt(body && body.started_at, 10);
  if (Number.isFinite(startedAt) && Date.now() - startedAt < 2000) {
    return res.status(200).json({ ok: true }); // too fast — silent accept
  }

  const email = (body && body.email || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email." });
  }

  const r = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, unsubscribed: false })
  });

  if (!r.ok) {
    const txt = await r.text();
    if (r.status === 409 || /already exists/i.test(txt)) {
      return res.status(200).json({ ok: true, alreadySubscribed: true });
    }
    console.error("Resend error", r.status, txt);
    return res.status(502).json({ error: "Could not add email. Try again later." });
  }

  return res.status(200).json({ ok: true });
}

// POST /api/contact — relays the contact form to SG via email.
// Env vars required:
//   RESEND_API_KEY  — Resend API key
//   CONTACT_FROM    — verified Resend sender, e.g. "SG Dietz Site <noreply@sgdietz.com>"
//   CONTACT_TO      — destination inbox, e.g. "SGDietz@pm.me"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  const to = process.env.CONTACT_TO;
  if (!apiKey || !from || !to) {
    return res.status(500).json({ error: "Contact form not configured" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }

  // Anti-spam: honeypot + min-time
  if (body?.website && body.website.toString().trim() !== "") {
    return res.status(200).json({ ok: true });
  }
  const startedAt = parseInt(body?.started_at, 10);
  if (Number.isFinite(startedAt) && Date.now() - startedAt < 2000) {
    return res.status(200).json({ ok: true });
  }

  const name = (body?.name || "").toString().trim().slice(0, 200);
  const email = (body?.email || "").toString().trim().slice(0, 200);
  const message = (body?.message || "").toString().trim().slice(0, 5000);

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email." });
  }

  const text = `New contact from sgdietz.com\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`;
  const html = `<h2>New contact from sgdietz.com</h2>
<p><strong>Name:</strong> ${escapeHtml(name)}<br>
<strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Message:</strong></p>
<pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>`;

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `sgdietz.com — message from ${name}`,
      text,
      html
    })
  });

  if (!r.ok) {
    const txt = await r.text();
    console.error("Resend send error", r.status, txt);
    return res.status(502).json({ error: "Could not send. Try again later." });
  }

  return res.status(200).json({ ok: true });
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

// SG Dietz — small progressive enhancement layer

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Stamp every form's hidden started_at with page load time (used for min-time check).
  const now = Date.now().toString();
  document.querySelectorAll('input[name="started_at"]').forEach((el) => { el.value = now; });

  wireForm("signup-form", "signup-status", "/api/subscribe", "Thanks — you're on the list.");
  wireForm("contact-form", "contact-status", "/api/contact", "Message sent. I'll be in touch.");
});

function wireForm(formId, statusId, endpoint, successMsg) {
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);
  if (!form || !status) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.className = "signup-status";
    status.textContent = "Sending...";

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        status.className = "signup-status ok";
        status.textContent = successMsg;
        form.reset();
      } else {
        const err = await res.json().catch(() => ({}));
        status.className = "signup-status err";
        status.textContent = err.error || "Something went wrong. Try again.";
      }
    } catch {
      status.className = "signup-status err";
      status.textContent = "Network error. Try again.";
    }
  });
}

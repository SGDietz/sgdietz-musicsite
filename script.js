// SG Dietz — small progressive enhancement layer

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Stamp every form's hidden started_at with page load time (used for min-time check).
  const now = Date.now().toString();
  document.querySelectorAll('input[name="started_at"]').forEach((el) => { el.value = now; });

  wireForm("signup-form", "signup-status", "/api/subscribe", "Thanks — you're on the list.");

  // Auto-tag content sections for scroll-reveal animation
  const reveals = document.querySelectorAll('main > section, main > section > h2, .song-card, .faq details, .msg-btn, .streaming-list li');
  reveals.forEach((el) => el.classList.add('reveal'));

  // Intersection Observer for scroll-reveal
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Stagger by index within parent for grid items
          const el = entry.target;
          const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.classList && c.classList.contains('reveal')) : [];
          const idx = siblings.indexOf(el);
          el.style.transitionDelay = idx > 0 ? `${Math.min(idx * 60, 480)}ms` : '0ms';
          el.classList.add('visible');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  } else {
    // No IO support: just show everything
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
  }
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

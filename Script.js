// Frame counter in the nav advances as the visitor scrolls through
// each section — a small nod to a film camera's frame-count window.

const sections = document.querySelectorAll("[data-frame]");
const counter = document.getElementById("frameCounter");
const total = sections.length;

if (counter && total) {
  const pad = (n) => String(n).padStart(3, "0");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const frame = entry.target.getAttribute("data-frame");
          counter.textContent = `FR. ${pad(frame)} / ${pad(total)}`;
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => observer.observe(section));
}
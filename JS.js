// Duplicate each looping row once so the scroll animation loops seamlessly
document.querySelectorAll("[data-loop]").forEach((track) => {
  [...track.children].forEach((el) => {
    const copy = el.cloneNode(true);
    copy.setAttribute("aria-hidden", "true");
    track.appendChild(copy);
  });
});

// Live date/time in the header
const clock = document.getElementById("clock");
const tick = () => {
  const d = new Date();
  clock.textContent = d.toLocaleDateString() + "  " + d.toLocaleTimeString();
};
tick();
setInterval(tick, 1000);

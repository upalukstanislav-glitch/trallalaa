const hint = document.getElementById("hint");

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const label = btn.dataset.label || btn.textContent.trim();

    if (btn.getAttribute("href") === "#") e.preventDefault();

    hint.textContent = `Відкриваю: ${label}`;
    clearTimeout(window.__t);
    window.__t = setTimeout(() => hint.textContent = "", 1400);
  });
});

const card = document.getElementById("card");
const hint = document.getElementById("hint");

// Эффект "блика" по мышке (очень лёгкий)
card.addEventListener("mousemove", (e) => {
  const r = card.getBoundingClientRect();
  const x = ((e.clientX - r.left) / r.width) * 100;
  const y = ((e.clientY - r.top) / r.height) * 100;
  card.style.setProperty("--mx", x + "%");
  card.style.setProperty("--my", y + "%");
});

// Маленькое уведомление при клике по кнопкам
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const label = btn.dataset.label || btn.textContent.trim();

    // Если href="#" — не переходим, просто показываем подсказку
    if (btn.getAttribute("href") === "#") {
      e.preventDefault();
    }

    hint.textContent = `Відкриваю: ${label}`;
    clearTimeout(window.__hintTimer);
    window.__hintTimer = setTimeout(() => (hint.textContent = ""), 1500);
  });
});

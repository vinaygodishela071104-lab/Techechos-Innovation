const hero = document.getElementById("hero");

if (hero) {
  hero.addEventListener("pointermove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    hero.style.setProperty("--mx", `${x}px`);
    hero.style.setProperty("--my", `${y}px`);
  });

  hero.addEventListener("pointerleave", () => {
    hero.style.setProperty("--mx", "0px");
    hero.style.setProperty("--my", "0px");
  });
}

/* =========================
   DARK MODE
========================= */

document.addEventListener("click", (e) => {
  if (e.target.closest(".dark-mode-btn")) {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light",
    );
  }
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

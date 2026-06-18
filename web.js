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

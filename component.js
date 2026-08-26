fetch("../components/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    const header = document.querySelector(".header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");
    const dropdownLinks = document.querySelectorAll(".dropdown > a");

    function setActiveNavLink() {
      const currentPath =
        window.location.pathname.split("/").pop().toLowerCase() || "index.html";

      const navLinks = document.querySelectorAll(".navbar a");

      navLinks.forEach((link) => {
        link.removeAttribute("aria-current");

        const href = link.getAttribute("href");
        if (!href || href.startsWith("#")) return;

        const linkPath = href.split("/").pop().toLowerCase();

        if (linkPath === currentPath) {
          link.setAttribute("aria-current", "page");
        }
      });
    }

    function handleScroll() {
      if (!header) return;
      header.classList.toggle("scrolled", window.scrollY > 20);
    }

    function closeMobileMenu() {
      if (!navbar || !menuToggle) return;

      navbar.classList.remove("active");
      menuToggle.setAttribute("aria-label", "Open menu");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

      document.querySelectorAll(".dropdown").forEach((item) => {
        item.classList.remove("active");
      });
    }

    setActiveNavLink();
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    if (menuToggle && navbar) {
      menuToggle.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("active");

        menuToggle.setAttribute(
          "aria-label",
          isOpen ? "Close menu" : "Open menu",
        );
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        menuToggle.innerHTML = isOpen
          ? '<i class="fa-solid fa-xmark"></i>'
          : '<i class="fa-solid fa-bars"></i>';
      });

      document.querySelectorAll(".navbar a").forEach((link) => {
        link.addEventListener("click", () => {
          if (window.innerWidth <= 1024 && !link.closest(".dropdown")) {
            closeMobileMenu();
          }
        });
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth > 1024) {
          closeMobileMenu();
        }
      });
    }

    dropdownLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        if (window.innerWidth <= 1024) {
          e.preventDefault();

          const parent = this.parentElement;

          document.querySelectorAll(".dropdown").forEach((item) => {
            if (item !== parent) item.classList.remove("active");
          });

          parent.classList.toggle("active");
        }
      });
    });
  })
  .catch((error) => console.error("Navbar load error:", error));

fetch("../components/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch((error) => console.error("Footer load error:", error));

const glow = document.querySelector(".glow");

if (glow) {
  document.addEventListener("mousemove", (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const revealElements = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-scale",
);

if (!prefersReducedMotion && revealElements.length) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealElements.forEach((el) => revealObserver.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("active"));
}

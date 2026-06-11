// Load Navbar
fetch('../components/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;

    const header = document.querySelector(".header");

    function handleScroll() {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
  });

// Load Footer
fetch('../components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });
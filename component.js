// // Load Navbar
// fetch('../components/navbar.html')
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById('navbar').innerHTML = data;

//     const header = document.querySelector(".header");

//     function handleScroll() {
//       if (window.scrollY > 20) {
//         header.classList.add("scrolled");
//       } else {
//         header.classList.remove("scrolled");
//       }
//     }

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//   });

// // Load Footer
// fetch('../components/footer.html')
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById('footer').innerHTML = data;
//   });
//   const glow=document.querySelector('.glow');

// document.addEventListener('mousemove',(e)=>{

// glow.style.left=e.clientX+'px';
// glow.style.top=e.clientY+'px';

// });
// const elements = document.querySelectorAll(
// ".reveal,.reveal-left,.reveal-right,.reveal-scale"
// );

// const observer = new IntersectionObserver(
// (entries)=>{

//     entries.forEach(entry=>{

//         if(entry.isIntersecting){
//             entry.target.classList.add("active");
//         }

//     });

// },
// {
//     threshold:0.15
// }
// );

// elements.forEach(el=>{
//     observer.observe(el);
// });
// ==============================
// LOAD NAVBAR
// ==============================
fetch('../components/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;

    const header = document.querySelector(".header");

    // ==============================
    // SCROLL EFFECT
    // ==============================
    function handleScroll() {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // ==============================
    // HAMBURGER MENU (FIXED HERE)
    // ==============================
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (menuToggle && navbar) {
      menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
      });
    }
  });


// ==============================
// LOAD FOOTER
// ==============================
fetch('../components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });


// ==============================
// CURSOR GLOW EFFECT
// ==============================
const glow = document.querySelector('.glow');

if (glow) {
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================
const elements = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-scale"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

elements.forEach(el => observer.observe(el));
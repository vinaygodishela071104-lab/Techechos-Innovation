// const tilt=document.getElementById("tiltArea");

// document.addEventListener("mousemove",(e)=>{

// const x=(window.innerWidth/2-e.pageX)/35;
// const y=(window.innerHeight/2-e.pageY)/35;

// tilt.style.transform=
// `rotateY(${x}deg) rotateX(${-y}deg)`;

// });

// const tilt = document.getElementById("tiltArea");

// if(window.innerWidth > 768 && tilt){

//     document.addEventListener("mousemove",(e)=>{

//         const x = (window.innerWidth/2 - e.pageX)/35;
//         const y = (window.innerHeight/2 - e.pageY)/35;

//         tilt.style.transform =
//         `rotateY(${x}deg) rotateX(${-y}deg)`;

//     });

// }

// const counters = document.querySelectorAll(".counter");

// const observer = new IntersectionObserver((entries)=>{

//     entries.forEach(entry=>{

//         if(entry.isIntersecting){

//             const counter = entry.target;
//             const target = +counter.dataset.target;

//             let current = 0;

//             const increment = target / 120;

//             const updateCounter = ()=>{

//                 if(current < target){

//                     current += increment;

//                     counter.textContent = Math.ceil(current);

//                     requestAnimationFrame(updateCounter);

//                 }else{

//                     counter.textContent = target;

//                 }

//             }

//             updateCounter();

//             observer.unobserve(counter);

//         }

//     });

// },{
//     threshold:0.5
// });

// counters.forEach(counter=>{
//     observer.observe(counter);
// });

// document.addEventListener("DOMContentLoaded", () => {

//     /* =====================================
//        HERO CARD TILT EFFECT
//     ===================================== */

//     const tilt = document.getElementById("tiltArea");

//     if (window.innerWidth > 768 && tilt) {

//         document.addEventListener("mousemove", (e) => {

//             const x = (window.innerWidth / 2 - e.pageX) / 35;
//             const y = (window.innerHeight / 2 - e.pageY) / 35;

//             tilt.style.transform =
//                 `rotateY(${x}deg) rotateX(${-y}deg)`;

//         });

//     }

/* =====================================
       STATS COUNTER ANIMATION
    ===================================== */

const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.dataset.target);

          let current = 0;

          const duration = 2000; // 2 seconds
          const increment = target / (duration / 16);

          const updateCounter = () => {
            current += increment;

            if (current < target) {
              counter.textContent = Math.ceil(current);

              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target;
            }
          };

          updateCounter();

          observer.unobserve(counter);
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  counters.forEach((counter) => {
    counter.textContent = "0";
    observer.observe(counter);
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

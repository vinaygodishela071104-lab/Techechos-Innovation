// const tilt=document.getElementById("tiltArea");

// document.addEventListener("mousemove",(e)=>{

// const x=(window.innerWidth/2-e.pageX)/35;
// const y=(window.innerHeight/2-e.pageY)/35;

// tilt.style.transform=
// `rotateY(${x}deg) rotateX(${-y}deg)`;

// });

const tilt = document.getElementById("tiltArea");

if(window.innerWidth > 768 && tilt){

    document.addEventListener("mousemove",(e)=>{

        const x = (window.innerWidth/2 - e.pageX)/35;
        const y = (window.innerHeight/2 - e.pageY)/35;

        tilt.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

    });

}


const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.dataset.target;

            let current = 0;

            const increment = target / 120;

            const updateCounter = ()=>{

                if(current < target){

                    current += increment;

                    counter.textContent = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.textContent = target;

                }

            }

            updateCounter();

            observer.unobserve(counter);

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter=>{
    observer.observe(counter);
});
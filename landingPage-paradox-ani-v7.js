gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

let textElem = document.getElementById("real-world-paradox-text");
const timePerCharacter = 0.02;

gsap.to(".real-world-paradox-text-wrap",{
        ScrollTrigger:{
            trigger: ".real-world-paradox-text-wrap",
            toggleActions: "play",
            start: "top 90%",
            end: "center top",
            scrub: true,
            marker: true
        },
        text:{
            value: textElem
        },
        // duration: textElem[0].innerText.length * timePerCharacter,
        delay: 0.5,
        ease: "none",
        delimiter: ""
    })
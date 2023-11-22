gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

let textElem = document.getElementById("real-world-paradox-text");
const textElemWrap = document.getElementById("test-trigger");
const textRegion = document.getElementById("test-text-content");
const timePerCharacter = 0.02;

gsap.to(textRegion,{
        ScrollTrigger:{
            trigger: ".test-trigger",
            // toggleActions: "play",
            start: "center center",
            end: "center top",
            scrub: true,
            marker: true
        },
        text:{
            value: textElem.innerText
        },
        // duration: textElem[0].innerText.length * timePerCharacter,
        delay: 0.5,
        ease: "none",
        delimiter: ""
    })
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

let textElem = document.getElementById("real-world-paradox-text");
const textElemWrap = document.getElementById("real-world-paradox-text-wrap");
const timePerCharacter = 0.02;

gsap.to(textElemWrap,{
        ScrollTrigger:{
            trigger: textElemWrap,
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
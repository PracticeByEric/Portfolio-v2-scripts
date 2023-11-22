gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

let textElem = document.getElementById("real-world-paradox-text");
let textElemWrap = document.getElementById("real-world-paradox-text-wrap");

gsap.to(real-world-paradox-text-wrap,{
        text:{
            value: textElem.innerText
        },
        ScrollTrigger:{
            trigger: textElemWrap,
            start: "center center",
            end: "center top",
            scrub: true,
            marker: true
        }
    })
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

let textElem = document.querySelector('.test-text-OG')

const textPlaceholder = document.getElementById("test-content-placeholder");
const textTrigger = document.getElementById("test-trigger");

gsap.to(textPlaceholder,{
    text:{
        value: "real-world paradox"
    },
    scrollTrigger:{
        trigger: textTrigger,
        start: "center center+=300px",
        end: "center center-=300px",
        scrub: true,
        markers: true
    }
}

);
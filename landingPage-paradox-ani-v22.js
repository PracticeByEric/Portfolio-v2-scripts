gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

let textElem = document.querySelector('.test-text-OG')

const textPlaceholder = document.getElementById("test-content-placeholder");
const textTrigger = document.getElementById("test-trigger");

gsap.to(textPlaceholder,{
    test:{
        value: "textElem.innerHTML"
    },
    scrollTrigger:{
        trigger: textTrigger,
        start: "center center",
        end: "center top",
        scrub: true,
        markers: true
    }
}

);
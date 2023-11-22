gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextTrigger);

let textElem = document.querySelector('.test-text-OG')

gsap.to(".test-content-placeholder",{
    test:{
        value: textElem.innerText
    },
    scrollTrigger:{
        trigger: ".test-trigger",
        start: "center center",
        end: "center top",
        scrub: true,
        markers: true
    }
}

);
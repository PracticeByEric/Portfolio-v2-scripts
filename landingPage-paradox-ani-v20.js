gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

let textElem = document.querySelector('.test-text-OG')

gsap.to(".test-content-placeholder",{
    test:{
        value: textElem.innerHTML
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
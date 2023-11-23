gsap.registerPlugin(ScrollTrigger);

gsap.set(".text-obsessed", {filter: "blur(10px)"});
gsap.to(".text-obsessed", {
    filter: "blur(0px)",
    ScrollTrigger: {
        trigger: ".text-obsessed",
        start: "top center+=300px",
        end: "top center",
        scrub: true,
        markers: true
    }
}
)
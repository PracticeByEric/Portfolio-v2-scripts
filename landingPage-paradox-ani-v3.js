gsap.registerPlugin(TextPlugin, ScrollTrigger);

const split = new SplitText("real-world-paradox-text", {
    type: "chars",
});

const t1 = gsap.timeline(
    {
        ScrollTrigger:{
            trigger: "real-world-paradox-text-wrap",
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: 0.75,
            marker: true,
        }
    }
)

.set(split.chars, {
    color: "#ffcc66",
    stagger: 0.1,
}, 0.1);
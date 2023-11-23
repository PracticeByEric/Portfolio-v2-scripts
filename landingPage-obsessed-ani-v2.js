gsap.registerPlugin(ScrollTrigger);

const obsessedWord = document.getElementById(".text-obsessed");
const obsessedTrigger = document.getElementById(".obsessed-trigger");

gsap.set(obsessedWord, {filter: "blur(10px)"});
gsap.to(obsessedWord, {
    filter: "blur(0px)",
    ScrollTrigger: {
        trigger: obsessedTrigger,
        start: "top center+=300px",
        end: "top center",
        scrub: true,
        markers: true
    }
}
)
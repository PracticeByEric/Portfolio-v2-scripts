gsap.registerPlugin(DrawSVGPlugin);
var spiralComplete = false;

const wavingHand = document.getElementById("waving-hand");

gsap.fromTo("#helloSpiralPath", {drawSVG: "0 0%"}, {duration: 1.25, drawSVG: "0% 100%", delay:1, onComplete: ()=> {
    // buckleText.classList.add("buckle-active");
    wavingHand.classList.add("popUp-wave-ani-group");
} });
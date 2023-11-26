gsap.registerPlugin(DrawSVGPlugin);

const heartTextDiv = document.getElementById("heart-text-div");
const heartSpiralDiv = document.getElementById("test-heart-spiral-div");

console.log(heartTextDiv.offsetTop);

heartTextDivLeft = heartTextDiv.getBoundingClientRect().left;

heartSpiralDiv.style.position = "absolute";
heartSpiralDiv.style.left = heartTextDivLeft + 600 + "px";
heartSpiralDiv.style.top = heartTextDiv.offsetTop + "px";

gsap.fromTo("#heart-spiral-curve", {drawSVG: "100% 100%"}, {duration: 1.5, drawSVG: "0% 100%",
scrollTrigger: {
    trigger: heartTextDiv,
    start: "top center+=100px",
    end: "bottom center",
    scrub: true,
    markers: true
  }});

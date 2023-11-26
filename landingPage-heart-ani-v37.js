const heartTextDiv = document.getElementById("heart-text-div");
const heartSpiralDiv = document.getElementById("test-heart-spiral-div");

console.log(heartTextDiv.offsetTop);

heartTextDivLeft = heartTextDiv.getBoundingClientRect().left;

heartSpiralDiv.style.position = "absolute";
heartSpiralDiv.style.left = heartTextDivLeft + 600 + "px";
heartSpiralDiv.style.top = heartTextDiv.offsetTop + "px";

gsap.registerPlugin(DrawSVGPlugin);

gsap.fromTo("#heart-spiral", {drawSVG: "100% 100%"}, {duration: 1.5, drawSVG: "0% 100%"});

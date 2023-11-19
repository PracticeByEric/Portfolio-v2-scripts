<script src="/portfolio-v2-scripts/DrawSVGPlugin1.min.js"></script>

console.log("SVG DRAW RUNNING!");
gsap.registerPlugin(DrawSVGPlugin);

gsap.to("#sinePath", {duration: 1, drawSVG:0});
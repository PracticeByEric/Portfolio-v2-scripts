<script src="/portfolio-v2-scripts/DrawSVGPlugin.min.js"></script>

console.log("IMPORTED");

gsap.registerPlugin(DrawSVGPlugin);

gsap.to("#sinePath", {duration: 1, drawSVG:0});
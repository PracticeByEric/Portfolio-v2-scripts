gsap.registerPlugin(DrawSVGPlugin);

console.log("IMPORTED");

gsap.fromTo("#sinePath", {drawSVG: "0 5%"}, {duration: 1, drawSVG: "95% 100%"});
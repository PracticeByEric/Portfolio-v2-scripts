console.log("SVG DRAW RUNNING!");
gsap.registerPlugin(DrawSVGPlugin);

gsap.to("#sinePath", {duration: 1, drawSVG:0});
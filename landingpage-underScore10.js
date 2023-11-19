console.log("SVG DRAW RUNNING!");
gsap.registerPlugin(DrawSVGPlugin1);

gsap.to("#sinePath", {duration: 1, drawSVG:0});
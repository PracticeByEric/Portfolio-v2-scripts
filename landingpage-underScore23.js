gsap.registerPlugin(DrawSVGPlugin);

gsap.fromTo("#sinePath",{drawSVG: "0 5%"}, {duration:1,drawSVG: "0% 100%"});

console.log("EXCUTED!");
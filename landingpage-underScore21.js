gsap.registerPlugin(DrawSVGPlugin);

gsap.from(".draw-me", {duration:1,drawSVG: "0% 100%"});

console.log("EXCUTED!");
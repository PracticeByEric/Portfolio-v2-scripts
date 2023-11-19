const pdText = document.getElementById("product-designer-text");

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: true,
});

// gsap.fromTo("#sinePath",{drawSVG: "0 5%"}, {duration:1,drawSVG: "0% 100%"});

// console.log("EXCUTED!");

var action = gsap.timeline({defaults: {duration: 1, ease: 'none'},
    scrollTrigger: {
        trigger: pdText,
        scrub: 0,
        start: "top center+100px",
        end: "bottom center",
    }
}
)

.fromTo("#sinePath", {drawSVG: "0 5%"}, {duration:1,drawSVG: "0% 100%"});
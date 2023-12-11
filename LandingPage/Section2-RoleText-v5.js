gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrollTrigger);

// const pdText = document.getElementById("product-designer-text");

// Get dot element
const testFlower = document.getElementById("line2-dot");

//NEW
//const testTrigger = document.getElementById("section2-trigger-text");
const testTrigger = document.getElementById("landingPage-section2");

// ScrollTrigger.defaults({
//   markers: false,
// });

// console.log("EXCUTED!");

var action = gsap.timeline({defaults: {duration: 1, ease: 'none'},
    scrollTrigger: {
      // NEW
      // scroller: testScroller,
      // NEW
      trigger: testTrigger,
      // NEW
        // trigger: pdText,
        scrub: 1,
        start: "bottom center+=200px",
        end: "center center",
        markers: false
    }
}
)

.fromTo("#sinePath", {drawSVG: "0 0%"}, {duration:1,drawSVG: "0% 100%", onComplete: ()=>{
  // once the drawSVG function finish
  // console.log('Completed!');
  // Trigger animation
  testFlower.style.display = 'flex';
  testFlower.classList.add("flowerGrow");
}, onUpdate: ()=>{
  const percentageProgressed = Math.floor(DrawSVGPlugin.getPosition("#sinePath")[1] / (DrawSVGPlugin.getLength("#sinePath") / 100));
  // hide dot when scroll back
  if(percentageProgressed != 100){
    testFlower.classList.remove("flowerGrow");
    testFlower.style.display = 'none';
    // console.log("Hide!");
  }
}});

gsap.registerPlugin(DrawSVGPlugin);
var spiralComplete = false;

const wavingHand = document.getElementById("waving-hand");

gsap.fromTo("#helloSpiralPath", {drawSVG: "0 0%"}, {duration: 1.5, drawSVG: "0% 100%", onComplete: ()=> {
    // buckleText.classList.add("buckle-active");
    wavingHand.classList.add("iconpulse");
} });

// const pdText = document.getElementById("product-designer-text");

// // Get flower placeholder element
// const testFlower = document.getElementById("test-flower-placeholder");
// gsap.registerPlugin(DrawSVGPlugin);
// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.defaults({
//   markers: false,
// });

// // gsap.fromTo("#sinePath",{drawSVG: "0 5%"}, {duration:1,drawSVG: "0% 100%"});

// // console.log("EXCUTED!");

// var action = gsap.timeline({defaults: {duration: 1, ease: 'none'},
//     scrollTrigger: {
//         trigger: pdText,
//         scrub: 1,
//         start: "top center",
//         end: "center center-=100px",
//         markers: false
//     }
// }
// )

// .fromTo("#sinePath", {drawSVG: "0 0%"}, {duration:1,drawSVG: "0% 100%", onComplete: ()=>{
//   // once the drawSVG function finish
//   console.log('Completed!');
//   // Trigger animation
//   testFlower.style.display = 'flex';
//   testFlower.classList.add("flowerGrow");
// }, onUpdate: ()=>{
//   const percentageProgressed = Math.floor(DrawSVGPlugin.getPosition("#sinePath")[1] / (DrawSVGPlugin.getLength("#sinePath") / 100));
//   if(percentageProgressed != 100){
//     testFlower.classList.remove("flowerGrow");
//     testFlower.style.display = 'none';
//     console.log("Hide!");
//   }
// }});
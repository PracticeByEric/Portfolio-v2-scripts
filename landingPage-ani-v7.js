// import GSAP plugin
gsap.registerPlugin(MotionPathPlugin);

//==========================>> GET WHOLE PAGE WRAP<<=======================================
const introCanvasWrap = document.getElementById("intro-text-wrapper");

//=============================>>LOCATING START & END LOCATION<<====================================
const hiWrap = document.getElementById("landing-text-wrap-hi");
const designerWrap = document.getElementById("landing-text-wrap-designer");

const hiRect = hiWrap.getBoundingClientRect();
const designerRect = designerWrap.getBoundingClientRect();

// function printWrapPos(){
//     console.log("Scroll in progress");
// }

window.addEventListener("scroll", () => {
    console.log("SCROLL IN PROGRESS");
  });
// printWrapPos();
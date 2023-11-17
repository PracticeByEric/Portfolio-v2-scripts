// import GSAP plugin
gsap.registerPlugin(MotionPathPlugin);

//==========================>> GET WHOLE PAGE WRAP<<=======================================
const introCanvasWrap = document.getElementById("site-page-wrapper");

//=============================>>LOCATING START & END LOCATION<<====================================
const hiWrap = document.getElementById("landing-text-wrap-hi");
const designerWrap = document.getElementById("landing-text-wrap-designer");

const hiRect = hiWrap.getBoundingClientRect();
const designerRect = designerWrap.getBoundingClientRect();

function printWrapPos(){
    console.log(hiRect.right + "," + hiRect.bottom);
    console.log(designerRect.right + "," + designerRect.top);
}

introCanvasWrap.addEventListener("scroll", printWrapPos);
printWrapPos();
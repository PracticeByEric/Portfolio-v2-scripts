// import GSAP plugin
gsap.registerPlugin(MotionPathPlugin);

// FOR INTRO, IT IS WINDOW SCROLLING INSTEAD OF DIV

//=============================>>LOCATING START & END LOCATION<<====================================
const hiWrap = document.getElementById("landing-text-wrap-hi");
const designerWrap = document.getElementById("landing-text-wrap-designer");

const hiRect = hiWrap.getBoundingClientRect();
const designerRect = designerWrap.getBoundingClientRect();

function printWrapPos(){
    console.log(hiRect.right + "," + hiRect.bottom);
    console.log(designerRect.right + "," + designerRect.top);
}

window.addEventListener("scroll", printWrapPos);
printWrapPos();
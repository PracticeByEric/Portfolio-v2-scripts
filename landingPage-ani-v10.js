// import GSAP plugin
gsap.registerPlugin(MotionPathPlugin);

// FOR INTRO, IT IS WINDOW SCROLLING INSTEAD OF DIV
const testSVG = document.getElementById("test-svg-block");

//=============================>>LOCATING START & END LOCATION<<====================================
const hiWrap = document.getElementById("landing-text-wrap-hi");
const designerWrap = document.getElementById("landing-text-wrap-designer");

const hiRect = hiWrap.getBoundingClientRect();

testSVG.style.position = 'absolute';
testSVG.style.left = hiRect.right;
testSVG.style.top = hiRect.bottom;
// // import GSAP plugin
// gsap.registerPlugin(MotionPathPlugin);

// // FOR INTRO, IT IS WINDOW SCROLLING INSTEAD OF DIV
// const testSVG = document.getElementById("test-svg-block");

// //=============================>>LOCATING START & END LOCATION<<====================================
const hiWrap = document.getElementById("landing-text-wrap-hi");

const hiRect = hiWrap.getBoundingClientRect();

console.log(hiRect.right);
console.log(hiRect.top);

// testSVG.style.position = 'absolute';
// testSVG.style.left = hiRect.right;
// testSVG.style.top = hiRect.bottom;

var testSVG = document.getElementById('test-svg-block');

testSVG.style.position = "absolute";
testSVG.style.left = hiRect.right+'px';
testSVG.style.top = hiRect.top+'px';
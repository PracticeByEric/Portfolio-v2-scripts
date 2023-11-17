//=============================>>GET THE TRACK AT THE CORRECT POSITION<<====================================
const pageScrollTop = document.documentElement.scrollTop;

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
testSVG.style.top = hiRect.top + pageScrollTop + 'px';


//===============================>>>ADD IN GSAP<<<=============================================
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.set("#motionSVG", { scale: 1, autoAlpha: 1 });
gsap.set("#tractor", {transformOrigin: "50% 50%"});
let rotateTo = gsap.quickTo("#tractor", "rotation"),
    prevDirection = 0;

gsap.to("#motionSVG", {
  scrollTrigger: {
    trigger: "#motionPath",
    start: "top center",
    end: () => "+=" + document.querySelector("#motionPath").getBoundingClientRect().height,
    scrub: 0.5,
    markers: true,
    onUpdate: self => {
      if (prevDirection !== self.direction) { // only run this when we're changing direction
        rotateTo(self.direction === 1 ? 0 : -180);
        prevDirection = self.direction;
      }
    }
  },
  // ease: pathEase("#motionPath"), // a custom ease that helps keep the tractor centered
  immediateRender: true,
  motionPath: {
    path: "#motionPath",
    align: "#motionPath",
    alignOrigin: [0.5, 0.5],
    // Rotation of object 
    // autoRotate: 90,
  }
});

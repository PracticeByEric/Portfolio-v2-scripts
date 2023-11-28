gsap.registerPlugin(ScrollTrigger);

const fuelTrigger = document.getElementById("fuel-text-trigger");
const fuelTrigger2 = document.getElementById("fuel-text-trigger-2");
const fuelDiv = document.getElementById("fuel-div");
const fuelDiv2 = document.getElementById("fuel-div-2");

//NEW
const testScroller = document.getElementById("test-scroller");
//NEW

gsap.to(fuelDiv2, {
    keyframes:{
        "0%": {clipPath: "polygon(0 100%, 10% 100%, 21% 100%, 36% 100%, 47% 100%, 57% 100%, 72% 100%, 83% 100%, 100% 100%, 100% 100%, 0 100%)"},
        "20%": {clipPath: "polygon(0 92%, 12% 93%, 25% 91%, 38% 93%, 49% 91%, 61% 87%, 74% 86%, 88% 80%, 100% 85%, 100% 100%, 0 100%)"},
        "30%": {clipPath: "polygon(0 81%, 11% 88%, 25% 91%, 36% 87%, 47% 82%, 59% 74%, 72% 75%, 85% 74%, 100% 77%, 100% 100%, 0 100%)"},
        "40%": {clipPath: "polygon(0 89%, 11% 78%, 23% 79%, 35% 78%, 47% 76%, 59% 68%, 73% 64%, 86% 64%, 100% 68%, 100% 100%, 0 100%)"},
        "50%": {clipPath: "polygon(0 63%, 8% 56%, 19% 53%, 34% 53%, 45% 62%, 59% 68%, 73% 64%, 85% 61%, 100% 52%, 100% 100%, 0 100%)"},
        "60%": {clipPath: "polygon(0 55%, 9% 63%, 22% 65%, 32% 59%, 45% 50%, 58% 43%, 73% 38%, 88% 39%, 100% 48%, 100% 100%, 0 100%)"},
        "70%": {clipPath: "polygon(0 32%, 10% 30%, 21% 28%, 34% 28%, 49% 33%, 61% 39%, 75% 43%, 90% 43%, 100% 35%, 100% 100%, 0 100%)"},
        "80%": {clipPath: "polygon(0 23%, 8% 28%, 23% 29%, 35% 25%, 50% 19%, 60% 17%, 74% 19%, 86% 18%, 100% 18%, 100% 100%, 0 100%)"},
        "90%": {clipPath: "polygon(0 8%, 10% 3%, 23% 3%, 36% 8%, 49% 10%, 60% 14%, 74% 14%, 86% 14%, 100% 13%, 100% 100%, 0 100%)"},
        "100%": {clipPath: "polygon(0 0, 13% 0, 24% 0, 38% 0, 50% 0, 61% 0, 77% 0, 86% 0, 100% 0, 100% 100%, 0 100%)"},
    },
    scrollTrigger:{
    // NEW
      scroller: testScroller,
      // NEW
        trigger: fuelTrigger2,
        start: "top center+=100px",
        end: "bottom center-=100px",
        scrub: 1,
        markers: true
    }
})
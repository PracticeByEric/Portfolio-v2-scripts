gsap.registerPlugin(ScrollTrigger);

const fuelDiv = document.getElementById("fuel-div");

gsap.to(fuelDiv, {
    keyframes:{
        "0%": {clipPath: "polygon(0 100%, 7% 100%, 28% 100%, 44% 100%, 56% 100%, 70% 100%, 80% 100%, 100% 100%, 100% 100%, 15% 100%)"},
        "50%": {clipPath: "polygon(0 62%, 14% 56%, 28% 56%, 41% 60%, 54% 60%, 67% 53%, 83% 49%, 100% 49%, 100% 100%, 0% 100%"},
        "100%": {clipPath: "polygon(0 8%, 12% 5%, 26% 3%, 39% 3%, 53% 3%, 66% 2%, 83% 0, 100% 3%, 100% 100%, 0% 100%)"},
    },
    duration: 4
})
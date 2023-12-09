gsap.registerPlugin(DrawSVGPlugin);
var spiralComplete = false;

var today = new Date();
var curHr = today.getHours();
var timeOutput;

const wavingHand = document.getElementById("waving-hand");

// gsap.fromTo("#helloSpiralPath", 
//     {drawSVG: "0 0%", opacity: 0}, 
//     {duration: 1.25, drawSVG: "0% 100%", opacity: 1, delay:1.25, onComplete: ()=> {
//     // buckleText.classList.add("buckle-active");
//     wavingHand.classList.add("popUp-wave-ani-group");
// } });

document.addEventListener('DOMContentLoaded', function() {
    gsap.fromTo("#helloSpiralPath", 
    {drawSVG: "0 0%", opacity: 0}, 
    {duration: 1.25, drawSVG: "0% 100%", opacity: 1, delay:1.25, onComplete: ()=> {
    // buckleText.classList.add("buckle-active");
    wavingHand.classList.add("popUp-wave-ani-group");
} });
 }, false);

if(curHr < 12){
    timeOutput = 'Morning,';
}else if(curHr < 18){
    timeOutput = 'Good afternoon,';
}else{
    timeOutput = 'Good evening,'
}

var typed = new Typed(".typedjs-simple", {
    strings:[timeOutput],
    typeSpeed: 100,

});
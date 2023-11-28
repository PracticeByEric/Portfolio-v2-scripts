gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Physics2DPlugin);

var emitter = document.getElementById("test-emitter");

const buckleTextDiv = document.getElementById("buckle-up-d1");
const buckleTextTrigger = document.getElementById("buckle-trigger");

container = document.createElement("div"),

// emitterSize = 100,
emitterSize = 424,
dotQuantity = 30,
dotSizeMax = 30,
dotSizeMin = 10,
speedExplode = 1,
gravity = 1;

container.style.cssText = "position:absolute; left:0;top:0; overflow:visible; z-index:5000; pointer-events:none;";
document.body.appendChild(container);

// TweenLite.set(emitter, {width: emitterSize, height:emitterSize, xPercent:-50, yPercent:-50});
TweenLite.set(emitter, {width: emitterSize, height:120, xPercent:0, yPercent:-100});

var explosion = createExplosion(container);

function createExplosion(container){
    var t1 = new TimelineLite(),
        angle, length, dotParticle, i, size;
        for(i = 0; i < dotQuantity; i++){
            dotParticle = document.createElement("div");
            dotParticle.className = "dot-explode";
            size = getRandom(dotSizeMin,dotSizeMax);
            container.appendChild(dotParticle);
            angle = Math.random() * Math.PI * 2;
            length = Math.random() * (emitterSize / 2 - size / 2);

            TweenLite.set(dotParticle, {
                x: Math.cos(angle) * length,
                y:Math.sin(angle) * length,
                width: size,
                height: size,
                // xPercent:-50,
                // yPercent:-50,
                xPercent:-212,
                yPercent:-60,
                force3D:true
            });
            t1.to(dotParticle, 1 + Math.random(), {
                opacity: 0,

                physics2D:{
                    angle: angle * 180 / Math.PI,
                    velocity:(100 + Math.random() * 250) * speedExplode,
                    gravity: 500 * gravity
                }
            }, 0);
        }
        return t1;
}

function explode(element){
    var bounds = element.getBoundingClientRect();
    TweenLite.set(container, {x:bounds.left + bounds.width / 2, y:bounds.top + window.scrollY + bounds.height / 2});
    explosion.restart();
}

function getRandom(min, max){
    return min + Math.random() * (max - min);
}

// explode(emitter);

// mouse click to trigger emitter
// emitter.onmousedown = emitter.ontouchstart = function(){
//     console.log("CLICKED!");
//     explode(emitter);
// }

const buckleText = document.getElementById("buckle-text");

gsap.fromTo(buckleTextDiv,{scale:5, opacity:0}, {scale: 1, opacity: 1, scrollTrigger: {
    trigger: buckleTextTrigger,
    start: "top center+=50px",
    end: "bottom center",
    markers:false,
    scrub: true
    }, onComplete: ()=>{
        console.log("BUCKLE COMPLETE!");
        explode(emitter);
        buckleText.classList.add("buckle-active");
        buckleText.classList.remove("buckle-inactive");
    }, onUpdate: ()=>{
        buckleText.classList.remove("buckle-active");
        buckleText.classList.add("buckle-inactive");
    }})
gsap.registerPlugin(DrawSVGPlugin);

//NEW
const pageScrollTrigger2 = document.getElementById("test-scroller");
//NEW

const heartTextDiv = document.getElementById("heart-text-div");
const heartSpiralDiv = document.getElementById("test-heart-spiral-div");
const heartText = document.getElementById("heartText");

console.log(heartTextDiv.offsetTop);

heartTextDivLeft = heartTextDiv.getBoundingClientRect().left;

heartSpiralDiv.style.position = "absolute";
heartSpiralDiv.style.left = heartTextDivLeft + 600 + "px";
heartSpiralDiv.style.top = heartTextDiv.offsetTop + "px";

//=======================>> EXPLODE <<========================
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Physics2DPlugin);

var emitter = document.getElementById("test-emitter-2");

container = document.createElement("div-2"),

// emitterSize = 100,
emitterSize = 114,
dotQuantity = 30,
dotSizeMax = 30,
dotSizeMin = 10,
speedExplode = 1,
gravity = 1;

container.style.cssText = "position:absolute; left:0;top:0; overflow:visible; z-index:5000; pointer-events:none;";
document.body.appendChild(container);

// TweenLite.set(emitter, {width: emitterSize, height:emitterSize, xPercent:-50, yPercent:-50});
TweenLite.set(emitter, {width: emitterSize, height:120, xPercent:0, yPercent:0});

var explosion = createExplosion(container);

function createExplosion(container){
    var t1 = new TimelineLite(),
        angle, length, dotParticle, i, size;
        for(i = 0; i < dotQuantity; i++){
            dotParticle = document.createElement("div-2");
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

//========================================================================

gsap.fromTo("#heart-spiral-curve", {drawSVG: "100% 100%"}, {duration: 1.5, drawSVG: "0% 100%",
scrollTrigger: {
    // NEW
    scroller: pageScrollTrigger2,
    // NEW
    trigger: heartTextDiv,
    start: "top bottom-=100px",
    end: "bottom center+=150px",
    scrub: true,
    markers: true
  }, onComplete: ()=>{
    console.log("EMIT!");
    explode(emitter);
    heartText.classList.add("heart-active");
    heartText.classList.remove("heart-inactive");
}, onUpdate: ()=>{
    heartText.classList.remove("heart-active");
    heartText.classList.add("heart-inactive");
}});

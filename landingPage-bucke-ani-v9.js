gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Physics2DPlugin);

var emitter = document.getElementById("test-emitter");

const buckleText = document.getElementById("buckle-up-text-access-test").textContent;
gsap.fromTo(buckleText, {
    opacity:0,
    scale:8,
}, {
    opacity: 1,
    scale: 1,
    ScrollTrigger:{
        trigger: buckle-up-d1,
        start: "center center",
        end: "center top",
        markers: true,
        scrub: 1

    }
})

container = document.createElement("div"),

emitterSize = 100,
dotQuantity = 30,
dotSizeMax = 30,
dotSizeMin = 10,
speedExplode = 1,
gravity = 1;

container.style.cssText = "position:absolute; left:0;top:0; overflow:visible; z-index:5000; pointer-events:none;";
document.body.appendChild(container);

TweenLite.set(emitter, {width: emitterSize, height:emitterSize, xPercent:-50, yPercent:-50});

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
                xPercent:-50,
                yPercent:-50,
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

explode(emitter);

// mouse click to trigger emitter
emitter.onmousedown = emitter.ontouchstart = function(){
    console.log("CLICKED!");
    explode(emitter);
}
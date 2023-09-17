// Test for displaying all dots together

const dotSize_intro = 3
const dotSize = 3
const spacing_intro = dotSize_intro *8
const spacing = dotSize * 8
const areaOfEffect_intro = 72
const areaOfEffect = 72

let dots_intro = []
let dots = []

function setup(){
    let cnv_intro = createCanvas(windowWidth, windowHeight);
    let cnv = createCanvas(windowWidth, windowHeight);
        cnv_intro.parent("intro-canvas-container");
             for (let k = 0; k < width; k += spacing_intro){
         for(let l = 0; l < innerHeight; l += spacing_intro){
             dots_intro.push(new Dot_intro(k + spacing/2, l + spacing/2, dotSize_intro))
         }
     }
        cnv.parent("canvas-container");
        for (let i = 0; i < width; i += spacing) {
            for (let j = 0; j < height; j += spacing) {
              dots.push(new Dot(i + spacing/2, j + spacing/2, dotSize))
            }
          }

     noStroke()
 }

 function draw(){
     background(36,36,38);
     dots_intro.forEach(dot_intro => {
         dot_intro.render()
     })
dots.forEach(dot => {
    dot.update()
    dot.render()
  })
 }

 class Dot_intro{
     constructor(x, y, size){
         this.x = x;
         this.y = y;
         this.size = size;
         this.transparency = 40
     }
  
 render(){
     fill(255, this.transparency)

     ellipse(this.x, this.y, this.size)
 }
 }



let mouseIsMoving = false;

function mouseMoved() {
  mouseIsMoving = true
  setTimeout(() => mouseIsMoving = false, 100)
}

class Dot {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.transparency = 40
  }
  
  update() {
    let distance = dist(mouseX, mouseY, this.x, this.y)
    if (mouseIsMoving && distance < areaOfEffect) {
      this.transparency = 255
    } else {
      this.transparency = max(40, this.transparency - 10)
    }
  }
  
  render() {
    fill(255, this.transparency)
    
    ellipse(this.x, this.y, this.size)
  }
}

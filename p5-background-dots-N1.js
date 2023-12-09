// Interactive dots on the main background
// dots specs for main interactive


// SET UP PROPERTIES FOR DOTS AND INTERACTIVE EFFECTS
const dotSize = 3
const spacing = dotSize * 8
const areaOfEffect = 72

let dots = []

//const p5Container = document.querySelector('#p5-container')
//let w = p5Container.clientWidth;
//let h = p5Container.clientHeight;

// NEW TESTING FOR WINDOW RESIZING

 function setup() {
  // main canvas

  // TODO: Change window width & height
  // let cnv = createCanvas(w, h);
  // cnv.parent(p5Container);

  createCanvas(windowWidth, windowHeight);

  //  for (let i = 0; i < width; i += spacing) {
  //    for (let j = 0; j < height; j += spacing) {
  //      dots.push(new Dot(i + spacing/2, j + spacing/2, dotSize))
  //    }
  //  }

  for (let i = 0; i < windowWidth; i += spacing) {
    for (let j = 0; j < windowHeight; j += spacing) {
      dots.push(new Dot(i + spacing/2, j + spacing/2, dotSize))
    }
  }

   noStroke()
 }

 function draw() {
  // single color bg color 
  background(36, 36, 38);
   dots.forEach(dot => {
     dot.update()
     dot.render()
   })
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

 // window resize detection
 function windowResized(){
  resizeCanvas(windowWidth, windowHeight);

 }


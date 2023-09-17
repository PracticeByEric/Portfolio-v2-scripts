const dotSize_intro = 3
const spacing_intro = dotSize_intro *8
const areaOfEffect = 72

let dots_intro = []

function setup(){
    let cnv_intro = createCanvas(windowWidth, windowHeight);
    cnv_intro.parent("intro-canvas-container");
    for (let k = 0; k < width; k += spacing_intro){
        for(let l = 0; l < innerHeight; l += spacing_intro){
            dots_intro.push(new Dot_intro(k + spacing/2, l + spacing/2, dotSize_intro))
        }
    }
    noStroke()
}

function draw(){
    background(36, 36, 38);
    dots_intro.forEach(dot_intro => {
        dot_intro.update()
        dot_intro.render()
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
    FileList(255, this.transparency)

    ellipse(this.x, this.y, this.size)
}
}
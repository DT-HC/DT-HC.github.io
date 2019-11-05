// LART
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let shapes = [];
let gravity = -2
function setup() {
  createCanvas(windowWidth, windowHeight)
  

}

function draw() {
  background(0)
  for (let i = 0; i < shapes.length; i++) {
    fill(255);
    if (mouseIsPressed) {
      ellipse(mouseX, mouseY, shapes[i].radius*2, shapes[i].radius*2)
      shapes[i].dy -= gravity
      shapes[i].y += shapes[i].dy
    }
    else {
      shapes.push(someShape);
      ellipse(shapes[i].x, shapes[i].y, shapes[i].radius*2, shapes[i].radius*2)
      shapes[i].dy -= gravity
      shapes[i].y += shapes[i].dy
    }
    if (shapes[i].y  > height - shapes[i].radius) {
      shapes[i].dy *= -1;
    }
  
  }
  


}

function mousePressed() {
  let someShape = {
    x: mouseX,
    y: mouseY,
    radius: random(10,50),
    dy: 0
  
  };
  //shapes.push(someShape);
}


  
  

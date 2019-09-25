// LBall
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x;
let y;
let dx; 
let dy;
let mode = "circle"
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(0, width);
  y = random(0, height)
  dx = random(-15, 15)
  dy = random(-15,15)
}

function draw(){
  background(255);
  if (mode === "circle"){
    show_circle();
  }
  else if (mode === "rectangle"){
   show_rect();
  }
  move_entity();
}
function windowResized() {
  setup();
}

function move_entity() {
  y += dy
  x += dx
  
}
function show_rect() {
  if (x + 50 > width || x < 0) {
    dx *= -1;
  }
  if (y + 50 > height || y < 0) {
    dy *= -1;
  }
  fill(0);
  rect(x, y, 50, 50);
}
function show_circle() {
    if (x + 25 > width || x < 0 + 25) {
      dx *= -1;
    }
    if (y + 25 > height || y < 0 + 25) {
      dy *= -1;
    }
    fill(0);
    
    circle(x, y, 50);

}

  

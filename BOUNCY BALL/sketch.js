// LBall
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

lstate = "sim" 
let entities = []
let num = 0;
let gravity = 2
function mousePressed(){
  num += 1
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  for (let i = 0; i < num; i++) {
    entities.push(new entity());
  }
}


function draw() {
  if (state != "sim") {
    background(255);
    fill(0)
    rect(width/2, height/2, 55, 55);
    if (distance(mouseX, mouseY, width/2, height < 2) < 55 && mouseIsPressed) {
      state = sim;
        
    }
      

  }
}
  else {
    background(220);
    for (let i = 0; i < entities.length; i++) {
      entity[i].move();
      entity[i].display();
  }
  
}


class entity {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1 
 
 }


  move() {
    this.speed += gravity
    this.y += this.speed 
    if(this.y > height) {
      this.speed *= -1
    }
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
function keyTyped() {
  if (key === "m") {
    state = "menu"
  }

}
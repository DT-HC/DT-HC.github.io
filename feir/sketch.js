// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let George;
let Jenna;
function setup() {
  createCanvas(windowWidth, windowHeight)
  background(220)
  George = new Walker(width/2, 200);
  Jenna = new Walker(width/2, 300);
}

function draw() {
  George.move();
  Jenna.move();
  George.display();
  Jenna.display();

  }

class Walker {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.fillColor = color(random(255), random(255), random(255));
    this.stepSize = 6;
    this.radius = 3;

  }
  display() {
    fill(this.fillColor);
    noStroke();
    circle(this.x, this.y, this.radius*2)
  }
  move() {
    let choice = random(100);
    if (choice < 25) {
      this.y -= this.stepSize
    }
    else if (choice < 50) {
      this.y += this.stepSize
    }
    else if (choice < 75) {
      this.x -= this.stepSize
    }
    else if (choice < 100) {
      this.x += this.stepSize
    }
  }
}

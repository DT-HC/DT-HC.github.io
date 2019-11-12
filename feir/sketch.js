// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let theBullets = [];
let gravity = 0.03;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = theBullets.length - 1; i > 0; i--) {
    theBullets[i].move();
    theBullets[i].display();
  }

  // If you want to spam the screen when holding down the mouse, use this...

  //  if (mouseIsPressed) {
  //    for (let i = 0; i < 100; i++)
  //     let myBullet = new Bullet(mouseX, mouseY, random(-3,3), random(-3, 3), 10);
  //     theBullets.push(myBullet);
  //  }

}

function mousePressed() {
  for (let i = 0; i < 100; i++) {
    let myBullet = new Bullet(mouseX, mouseY, , random(-3, 3), 5);
    theBullets.push(myBullet);

  }
}

class Bullet {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.alpha = 255;

  }

  display() {
    fill(255, 0, 0, this.alpha);
    circle(this.x, this.y, this.radius * 2);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    this.dy += gravity
    this.alpha -= 1
  }

  isDone() {
    return this.alpha <= 0;
  }
}
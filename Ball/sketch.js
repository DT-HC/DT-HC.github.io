// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cannonX;
let cannonY;
let cannonWidth;
let cannonHeight;
let bulletAngle;
let bullets = [];
let state = "Gravity";

function setup() {
  createCanvas(windowWidth, windowHeight);
  cannonX = 75;
  cannonY = height - 150;
  cannonWidth = 50;
  cannonHeight = 125;
  bulletAngle = 0;

  
}

function draw() {
 background(220);
 
 updateBullets();
  
  }

function mousePressed() {
  displayBall()
}

function displayBall() {
  push();
  translate(mouseX,mouseY);
  bulletAngle = atan2(mouseY - pmouseY, mouseX - pmouseX)
  rotate(bulletAngle);
  pop();
  let thisBullet = {
    x: mouseX,
    y: mouseY,
    radius: cannonWidth,
    angle: bulletAngle,
    speed: distance(pmouseX,pmouseY,mouseX,mouseY)
  };
  bullets.push(thisBullet);

}

function updateBullets() {
  for (let thisBullet of bullets) {
    thisBullet.x += thisBullet.speed * cos(thisBullet.angle);
    thisBullet.y += thisBullet.speed * sin(thisBullet.angle)

    ellipse(thisBullet.x, thisBullet.y, thisBullet.radius)
  }
}

// LART
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let MASA;
let sizeadd = 1

function preload() {
  MASA = loadImage("assets/Masahiro.jpg");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(255);

  if (keyIsPressed) {
    if (keyCode === UP_ARROW) {
    sizeadd *= 1.01;
    }
    else if (keyCode === DOWN_ARROW) {
      sizeadd /=1.01;
    }
  }
  imageMode(CENTER);
  image(MASA, mouseX, mouseY, MASA.width * sizeadd, MASA.height * sizeadd);
  
}


  

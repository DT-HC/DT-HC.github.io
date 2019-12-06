// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let numberOfClicks = 0;
let allTimeHighestClicks;

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (getItem("highScore")!== null) {
    allTimeHighestClicks = getItem("highScore");
  }
  else {
    allTimeHighestClicks = 0;
  }
}

function draw() {
  background(220);

  textSize(72);
  
  fill("black");
  text( numberOfClicks, 50, 100);
  
  fill("green");
  text(allTimeHighestClicks, 50, 300);

}

function mousePressed() {
  numberOfClicks++;
  if (numberOfClicks > allTimeHighestClicks){
    allTimeHighestClicks = numberOfClicks;
    storeItem("highScore", allTimeHighestClicks)
  }
}

// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let rows = 30;
let cols = 30;
let autoPlay = false;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createRandom2dArray(cols, rows);
}

function draw() {
  background(220);
  displayGrid(grid, rows, cols);
  if (autoPlay) {
    if (frameCount % 5 === 0) {
      update();
    }
  }
}

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}

function keyTyped() {
  if (key === "r") {
    grid = createRandom2dArray(cols, rows);
  }
  if (key === "c") {
    grid = createEmptyGrid();
  }
  if (key === " ") {
    update();
  }
  if (key === "a") {
    autoPlay = !autoPlay;
  }
}

function mousePressed() {
  let cellSize = width/cols;

  let xCoord = floor(mouseX / cellSize);
  let yCoord = floor(mouseY / cellSize);
  
  if (grid[yCoord][xCoord] === 1) {
    grid[yCoord][xCoord] = 0;
  }
  else {
    grid[yCoord][xCoord] = 1;
  }
}

function createEmptyGrid() {
  let emptyGrid = [];
  for (let x = 0; x < cols; x++) {
    emptyGrid.push([]);
    for (let y = 0; y < rows; y++) {
      emptyGrid[x].push(0);
    }
  }
  return emptyGrid;
}

function update() {
  


  
  
}

function displayGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
     randomGrid.push(1);
    }
  }
  return randomGrid;
}
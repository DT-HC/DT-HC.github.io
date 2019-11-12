// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

cols= 30
rows = 30


let grid = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = create2dArray(20, 20);
}

function draw() {
  background(220);
<<<<<<< HEAD
  displayGrid();

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



=======
  displayGrid(grid);
}
>>>>>>> c61708bf50633efa5c95da19400c0a1899f1247a

function displayGrid(theGrid) {
  //assumes the grid is a square...
  for (let y = 0; y < theGrid[0].length; y++) {
    for (let x = 0; x < theGrid[0].length; x++) {
      if (theGrid[y][x] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
    
      let cellSize = width / theGrid[0].length;
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

<<<<<<< HEAD
function createRandom2dArray(cols, rows) {
=======
function create2dArray(cols, rows) {
>>>>>>> c61708bf50633efa5c95da19400c0a1899f1247a
  let someArray = [];
  for (let i=0; i<cols; i++) {
    someArray.push([]);
    for (let j=0; j<rows; j++) {
<<<<<<< HEAD
      if (random(100) < 50) {
        someArray[i].push(1);
      }
      else {
        someArray[i].push(0);
      }
    }
  }
  return someArray;
}
=======
      someArray[i].push(0);
     }
    }
  }
  return someArray;
>>>>>>> c61708bf50633efa5c95da19400c0a1899f1247a

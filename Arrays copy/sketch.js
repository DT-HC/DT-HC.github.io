// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let pacman;
  let w = 40;
  let cols, rows;
  //width of each square is 40
  let grid = [];
  let current;
  //the current cell being visited
  let stack = [];
  let xlocation = 0;
  let ylocation = 0;
  
 
 
 
  function setup() {
    createCanvas(windowWidth, windowHeight);
    cols = floor(width / w);
    rows = floor(height / w);
    pacman = new Pacman(0, 0);
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        let cell = new Cell(i, j);
        //cellLoc = new Cell(xlocation + dir, ylocation + dir);
        grid.push(cell);
      }
    }
    current = grid[0];
 
  }
 
  function draw() {
    background(0);
    pacman.show();
    pacman.borders();
    for (let i = 0; i < grid.length; i++) {
      grid[i].show();
    }
    current.visited = true;
    let next = current.checkNeighbours();
    if (next) {
      next.visited = true;
 
      stack.push(current);
 
      removeWalls(current, next);
 
      current = next;
    } else if (stack.length > 0) {
      current = stack.pop();
    }
  }
 
      function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
     //while (!cellLoc.walls[1]){
      pacman.moveX(1);
    //}
  }
    if (keyCode === LEFT_ARROW) {
      pacman.moveX(-1);
    }
    if (keyCode === UP_ARROW) {
      pacman.moveY(-1);
    }
    if (keyCode === DOWN_ARROW) {
      pacman.moveY(1);
    }
  }
 
 
  function Pacman(x, y) {
    this.x = x + 20;
    this.y = y + 20;
    this.toDelete = false;
    this.r = w;
    this.top = false;
 
 
    this.show = function() {
      noStroke();
      fill(255, 146, 0);
      ellipseMode(CENTER);
      ellipse(this.x, this.y, this.r, this.r);
    }
 
    this.moveX = function(dir) {
      this.x += dir * w;
      xlocation += dir 
    }
    this.moveY = function(dir) {
      this.y += dir * w;
      ylocation += dir
    }
    this.borders = function() {
      if (this.x > width - 1) {
        this.x = x + 20;
      }
      if (this.x < 0) {
        this.x = width - 20;
      }
 
      if (this.y > height - 1) {
        this.y = y + 20;
      }
      if (this.y < 0) {
        this.y = height - 20;
      }
    }
  }
 
  function index(i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
      return -1;
    }
    return i + j * cols;
  }
 
  function Cell(i, j) {
    this.i = i;
    this.j = j;
    //i = column number
    //j = row number
    this.walls = [true, true, true, true];
    //top, right, bottom, left
    //if true you see that side of the wall of each cell, if false you do not see the wall
    this.visited = false;
 
 
    this.checkNeighbours = function() {
      let neighbours = [];
`  //top = walls[0]`
      let top = grid[index(i, j - 1)];
      let right = grid[index(i + 1, j)];
      let bottom = grid[index(i, j + 1)];
      let left = grid[index(i - 1, j)];
 
      if (top && !top.visited) {
        neighbours.push(top);
      }
      if (right && !right.visited) {
        neighbours.push(right);
      }
      if (bottom && !bottom.visited) {
        neighbours.push(bottom);
      }
      if (left && !left.visited) {
        neighbours.push(left);
      }
      if (neighbours.length > 0) {
        let r = floor(random(0, neighbours.length));
        return neighbours[r];
      } else {
        return undefined;
      }
 
    }
 
 
 
    this.show = function() {
      let x = this.i * w;
      let y = this.j * w;
      stroke(255);
      if (this.walls[0]) {
        line(x, y, x + w, y);
      }
      if (this.walls[1]) {
        line(x + w, y, x + w, y + w);
      }
      if (this.walls[2]) {
        line(x + w, y + w, x, y + w);
      }
      if (this.walls[3]) {
        line(x, y + w, x, y);
      }
 
    }
  }
 
  function removeWalls(a, b) {
    let x = a.i - b.i;
    if (x === 1) {
      a.walls[3] = false;
      b.walls[1] = false;
    } else if (x === -1) {
      a.walls[1] = false;
      b.walls[3] = false;
    }
    let y = a.j - b.j;
    if (y === 1) {
      a.walls[0] = false;
      b.walls[2] = false;
    } else if (y === -1) {
      a.walls[2] = false;
      b.walls[0] = false;
    }
  }
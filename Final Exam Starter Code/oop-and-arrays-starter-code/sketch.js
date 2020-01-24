// Using OOP and Arrays Starter Code

///////////////////////////////////////////////////////////////////////////////
//
// You do not need to edit the following classes at all. Scroll down.
//
///////////////////////////////////////////////////////////////////////////////

class Bubble {
  constructor(x, y, dy) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = random(25, 100);
    this.color = color(random(255), random(255), random(255), random(255));
    this.timer = new Timer(1000);
    this.isOffScreen = false;
  }

  display() {
    noStroke();
    if (!this.timer.isDone()) {
      fill(this.color);
      ellipse(this.x, this.y, this.radius*2, this.radius*2);
    } 
    else {
      this.isOffScreen = true;
    }
  }

  bubbleUp() {
    if (this.y >= this.radius) {
      this.y += this.dy;

      //wind factor
      if (random(100) < 40) {
        this.x += random(-5, 5);
      }
    }
    else {
      if (!this.timer.hasRun) {
        this.timer.restart();
      }
    }

    
  }
}

class Timer {
  constructor(timeToWait) {
    this.timeToWait = timeToWait;
    this.hasRun = false;
  }

  isDone() {
    return millis() >= this.endTime;
  }

  restart() {
    this.startTime = millis();
    this.endTime = this.startTime + this.timeToWait;
    this.hasRun = true;
  }
}

///////////////////////////////////////////////////////////////////////////////
//
// Your code should go below this comment.
//
///////////////////////////////////////////////////////////////////////////////


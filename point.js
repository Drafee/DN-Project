class Point {
  constructor(x, r, c) {
    this.x = x;
     this.m = r;
     this.r = r;
     this.c = c;
     this.a = createVector(0, 0);
    this.v = createVector(0, 0);
  }

  applyForce(force) { 
    let f = p5.Vector.div(force, this.m);
    this.a.add(f);
  }

  update() {
    this.v.add(this.a); // velocity gets changed by acceleration
    this.x.add(this.v); // position gets changed by velocity
    this.a.mult(0); // acceleration has to be reset (if we want dynamic acceleration we have to introduce an additional quantity, called the jerk.
  }

  display() {
    noStroke();
    fill(this.c);
    circle(this.x.x, this.x.y, this.r);
  }

  
  run() {
    this.update();
    this.display();
  }

}
class Blackhole3D {
  constructor(x, m, r) {
    this.m = m;
    this.x = x.copy();
    this.G = G;
    this.c=color(10, 10, 10);
    this.r=r;
  }
  display() {
    fill(this.c);
    translate(this.x.x, this.x.y, this.x.z);
    sphere(this.r);
    translate(-this.x.x, -this.x.y, -this.x.z)
  }
  
  
}


class Planet3D {
  constructor(x, v, m, c) {
    this.m = m;
    this.x = x.copy();
    this.v = v.copy();
    this.a = createVector(0, 0, 0);
    this.G = G;
    this.c=c;
    this.r=m**0.33;
    this.dead = false;
  }
  
  applyForce(force) {
    let f = p5.Vector.div(force, this.m);
    this.a.add(f);
  }
  
   attract(blackhole3D) {
    let FGrav = p5.Vector.sub(blackhole3D.x, this.x);
    let r = FGrav.magSq();
    let strength;
     if (r<=(blackhole3D.r + this.r)**2) {
       this.dead = true;
     }
     strength = (this.G * this.m * blackhole3D.m) / r;
    FGrav.setMag(strength);
    return FGrav;
   }
  
  update() {
    this.v.add(this.a);
    this.x.add(this.v);
    this.a.mult(0);
  }

  display() {
    noStroke();
    fill(this.c);
    translate(this.x.x, this.x.y, this.x.z);
    sphere(this.r);
    translate(-this.x.x, -this.x.y, -this.x.z)
  }
  
}

class System3D {
  constructor(wl, wr, hu, hd, d1, d2) {
    this.planets = [];
    this.wl = wl;
    this.wr = wr;
    this.hu = hu;
    this.hd = hd;
    this.d1 = d1;
    this.d2 = d2;
  }

  addPlanet(c) {
    let x=createVector(random(this.wl,this.wr), random(this.hu, this.hd), random(this.d1, this.d2));
    let v=createVector(0,0, 0);
    let m=random(0.1,3);
    this.planets.push(new Planet3D(x, v, m, c));
  }
  
   addblackhole3D(m, bx, by, bz, r) {
    let x=createVector(bx, by, bz);
    this.blackhole3D = new Blackhole3D(x, m, r);
  }

  run() {
    for (var i in this.planets) {
      let p1 = this.planets[i];

    p1.applyForce(p1.attract(this.blackhole3D));
    if (p1.dead){
      p1.x=createVector(random(this.wl,this.wr), random(this.hu, this.hd), random(this.d1, this.d2));
    p1.v=createVector(0,0, 0);
    p1.a = createVector(0, 0, 0);
      p1.dead = false;
    }
    p1.update();
    p1.display();
    }
    this.blackhole3D.display();
  }
}
class Blackhole {
  constructor(x, m, r) {
    this.m = m;
    this.x = x.copy();
    this.G = G;
    this.c=color(80, 80, 80);
    this.r=r;
  }
  display() {
    noStroke();
    fill(this.c);
    circle(sc*this.x.x, sc*this.x.y, this.r);
  }
  
  
}


class Planet {
  constructor(x, v, m, c) {
    this.m = m;
    this.x = x.copy();
    this.v = v.copy();
    this.a = createVector(0, 0);
    this.G = G;
    this.c=c;
    this.r=m**0.33;
    this.dead = false;
  }
  
  applyForce(force) {
    let f = p5.Vector.div(force, this.m);
    this.a.add(f);
  }
  
   attract(blackhole) {
    let FGrav = p5.Vector.sub(blackhole.x, this.x);
    let r = FGrav.magSq();
    let strength;
     if (r<=(blackhole.r + this.r)**2) {
       this.dead = true;
     }
     strength = (this.G * this.m * blackhole.m) / r;
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
    circle(sc * this.x.x, sc* this.x.y, this.r);
  }
  
}

class System {
  constructor(wl, wr, hu, hd) {
    this.planets = [];
    this.wl = wl;
    this.wr = wr;
    this.hu = hu;
    this.hd = hd;
  }

  addPlanet(c) {
    let x=createVector(random(this.wl,this.wr)/sc, random(this.hu, this.hd)/sc);
    let v=createVector(0,0);
    let m=random(0.1,10);
    this.planets.push(new Planet(x, v, m, c));
  }
  
   addblackhole(m, bx, by, r) {
    let x=createVector(bx, by);
    this.blackhole = new Blackhole(x, m, r);
  }

  run() {
    for (var i in this.planets) {
      let p1 = this.planets[i];

    p1.applyForce(p1.attract(this.blackhole));
    if (p1.dead){
      p1.x=createVector(random(this.wl,this.wr)/sc, random(this.hu, this.hd)/sc);
    p1.v=createVector(0,0);
    p1.a = createVector(0, 0);
      p1.dead = false;
    }
    p1.update();
    p1.display();
    }
    this.blackhole.display();
  }
}
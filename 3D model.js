class figure{
  constructor(px, pz){
    this.px = px;
    this.pz = pz;
    this.l = 0;
    
    this.leftl = 0;
    this.rightl = 0;
    this.upl = 0;
    this.downl = 0;
    this.p = 0;
  }
  
  
  activate(cells){
    this.cell = cells;
    this.l = sqrt(cells.length);
    this.pz = -700+2*l;


  }
  
  moveLeft(){
    if (this.upl + this.downl == 0){
      if (this.leftl == 1){
        this.leftl = 0;
        this.px -= l;
        this.p -= 1;
      } else if (this.rightl == 1){
        this.rightl = 0;
        this.px -= l;
      } else if ((this.p % this.l != 0) && (this.cell[this.p].walls.left == false)){
      this.px -= l;
      this.leftl += 1;
      } 
      } 
    }
      
  moveRight(){
    if (this.upl + this.downl == 0){
      if (this.rightl == 1){
        this.rightl = 0;
        this.px += l;
        this.p += 1;
      } else if (this.leftl == 1){
        this.leftl = 0;
        this.px += l;
      } else if ((this.p % this.l != this.l - 1) && (this.cell[this.p].walls.right == false)){
      this.px += l;
      this.rightl += 1;
        } 
      }
    }
    moveUp(){
      if (this.leftl + this.rightl == 0){
      if (this.upl == 1){
        this.upl = 0;
        this.pz -= l;
        this.p -= this.l;
      } else if (this.downl == 1){
        this.downl = 0;
        this.pz -= l;
      } else if ((int(this.p / this.l) != 0) && (this.cell[this.p].walls.top == false)){
      this.pz -= l;
      this.upl += 1;
      }
      }
    } 
    moveDown(){
      if (this.leftl + this.rightl == 0){
      if (this.downl == 1){
        this.downl = 0;
        this.pz += l;
        this.p += this.l;
        
      } else if (this.upl == 1){
        this.upl = 0;
        this.pz += l;
      } else if ((int(this.p / this.l) != this.l - 1) && (this.cell[this.p].walls.bottom== false)){
      this.pz += l;
      this.downl += 1;
      }
      }
    } 

  check(){
    if (this.p == this.l*this.l-1){
      if (level == 3){
      scene_check = 'level_up_4';
      current2 = false;
      frameCount5 = frameCount;
      }
      if (level == 4){
        scene_check = 'level_up_5';
        frameCount6 = frameCount;
        
      }
      if (level == 5){
        scene_check = 'ending';
        frameCount6 = frameCount;
        
      }
    }
  }
  display()
  {
    translate(this.px, 0, this.pz);
    texture(img_girl);
    //fill(color(255, 0, 0));
    box(l, l, l);
    translate(-this.px, 0, -this.pz);
    this.check();

  }
}
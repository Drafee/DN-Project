class imageMove{
  constructor(px, py){
    this.px = px;
    this.py = py;
    this.p = 0
    this.image = img1;
    this.count = 0;
    
  }
  moveLeft(){
    if ((this.p % cols != 0) && (cells[this.p].walls.left == false)){
      this.px -= w;
      this.p -= 1;
    }   
  }
    moveRight(){
    if ((this.p % cols != cols - 1) && (cells[this.p].walls.right == false))  {
      this.px += w;
      this.p += 1;
    }
  }
    moveUp(){
        if ((int(this.p / cols) != 0) && (cells[this.p].walls.top == false))       {
      this.py -= w;
      this.p -= cols;
    }
  }
    moveDown(){
        if ((int(this.p / cols) != cols - 1) && (cells[this.p].walls.bottom == false))       {
      this.py += w;
      this.p += cols;
    }
  }
  
  select(){
    if (this.count < 5){
        this.image = img1;
        } else if (this.count < 10){
          this.image = img_2;
        } else if (this.count < 15){
          this.image = img3;
        } else if (this.count < 20){
          this.image = img4;
        } else if (this.count < 100){
          this.image = img1;
        } else 
        {this.count = 0}
  }
  display(){
    this.count ++;
    this.select();
    image(this.image, this.px, this.py, 1.5*w, 1.5*w)
    this.check()
  }
  check(){
    if (this.p == cols*cols-1){
      scene_check = 'level_up_3';
      frameCount4 = frameCount;
      current = false;
    }
  }
}
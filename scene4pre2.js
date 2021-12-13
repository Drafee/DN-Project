function scene4pre2(){
  clear();
  background(235);
  
  show_level(level, 40)
  fill(100);
  textFont(font1);
  textSize(50);
  translate(-350, 330, 0);
  text('[click to continue]', 5, 20);
  
  translate(350, -330, 0);
  
  fill(100);
  textFont(font2);
  textSize(50);
  translate(0, -50, 0);
  text('.\n But your doppelgangers can be summoned to \n change the state of four adjacent space to the opposite\n if the maze can not be solvable directly', 5, 20); 
    translate(0, 50, 0);
  translate(0, 200, 0);
  fill('#B65D7E');
  text('with SPACE KEY', 5, 20); 
    translate(0, -200, 0);
  
  image(img_explain1,50, 300, 80, 80);
  image(img_explain2,150, 300, 80, 80);
  
  
}
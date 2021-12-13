function scene4pre1(){
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
  text('Now comes to the 4D world\n As one more time dimension is added into you, \n you will have doppelgangers \n to help you pass the maze', 5, 20); 
  
}
function scene4pre3(){
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
  text('Ready?', 5, 20); 
  
}
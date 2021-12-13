function prescene3(r){
  clear();
  background(235);
  
  if (r >= 100){
    scene_check = 'prescene4';
    frameCount2 = frameCount;
  }
    
  fill(100);
  textFont(font2);
  textSize(50);
  translate(0, -50, 0);
  if (r < 50){
      text('The Journey Starts', 5, 20); 
  }
  else{
      text('NOW', 5, 20);
  }

  
}
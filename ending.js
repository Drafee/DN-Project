
function ending(){
  clear();
  background(235);
  //the title
  fill('#D65D7E');//'#ED225D'
  textFont(font1);
  textSize(60);
  translate(0, -200, 0);
  text('Congratulations! You have passed all the levels', 5, 20);
  
  translate(0, -100, 0);
    textSize(30);
  text('TO BE CONTINUED', 5, 20);
  translate(0, 100, 0);
  
  
  //Start
  fill('#D65D7E');
  translate(0, 170, 0);
  textFont(font2);
  if (endcheckClickStart()){
      textSize(60);
  }
  text('ReStart', 5, 30);
  translate(0, -70, 0);
  
  bs_end.run();
  
}

function endcheckClickStart(){
  if (mouseX >= 650 && mouseX <= 800 && mouseY >= 419 && mouseY <= 460 ){
    return true;
  }
  else return false;
}
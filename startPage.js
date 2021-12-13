
function startPage(){
  clear();
  background(235);
  //the title
  fill('#D65D7E');//'#ED225D'
  textFont(font1);
  textSize(80);
  translate(0, -100, 0);
  text('Chasing the Black h    le', 5, 20);
  
  
  
  //Start
  fill('#D65D7E');
  translate(0, 170, 0);
  textFont(font2);
  if (checkClickStart()){
      textSize(120);
  }
  text('Start', 5, 30);
  translate(0, -70, 0);
  
  
    
  fill(80);
  circle(345, -100, 40);
  bs_start.run();
  
}

function checkClickStart(){
  if (mouseX >= 622 && mouseX <= 829 && mouseY >= 460 && mouseY <= 540 ){
    return true;
  }
  else return false;
}

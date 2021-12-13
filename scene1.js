function scene1(){
  clear()
  background(235);
  level = 1;
  _point.run();
    
  show_level(level, 40);

    
  noStroke();
  fill(60);
  translate(0, 133, 0);
  rect(0, 0, width, 15);
  translate(0, -133, 0);
  
  fill(80);
  circle(-500, 100, 50);
  let G = 0.0001;
  bs1.run();
  judge_reach()
  
}

function judge_reach(){
  if (abs(_point.x.x + 500 <= 5) && (level == 1)){
    scene_check = 'level_up_2';
    frameCount3 = frameCount;
  }
}
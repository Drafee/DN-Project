

function level_up_4(r){
  
  clear()
  background(235);
  //r = 159;

  if (r < 60){
    //level up
    image(img_girl, 350, 350, 60, 60);
    level_up(level, 60-r);
  } //become brighter
  else if (r == 60){
    level += 1
    ml_flag = false;
  }

  else if (r<160){
    fill(235, 235, 235, 2.55*(r-60));
    rect(0, 0, width, height)  
    show_level(level, 40);
    
    // 
  } else {
    scene_check = 'scene4pre1';
  }


}
function level_up_5(r){
  
  clear()
  background(235);
  //r = 159;
  if (r < 60){
    //level up
    image(img_girl, 350, 350, 60, 60);
    level_up(level, 60-r);
  } //become brighter
  else if (r == 60){
    level += 1
    ml_flag = false;
  }

  else if (r<160){
    fill(235, 235, 235, 2.55*(r-60));
    rect(0, 0, width, height)  
    show_level(level, 40);
    
    // 
  } else {
    scene_check = 'scene5';
  }


}
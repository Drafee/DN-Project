let type_l2 = false;
let word_arr2 = 'Wow that’s what a 2D world looks like then! \n I can move in 2 directions with KEY ADWS! \nThat’s amazing!'.split(' ');
let word2 = '';

function level_up_2(r){
  
  clear()
  background(235);

  
  if (r < 60){
    //level up
    noStroke();
    fill(60);
    translate(0, 133, 0);
    rect(0, 0, width, 15);
    translate(0, -133, 0);
  
    fill(80);
    circle(-500, 100, 50);
    bs1.run();
    level_up(level, 60-r);
    translate(-500, 50, 0);
    fill(80, 80, 80);
    textSize(20);
    text('JUMP JUMP JUMP', 0, 0);
    translate(500, -50, 0)
  } //become brighter
  else if (r == 60){
    level += 1
    ml_flag = false;
  }

  else if (r<160){

    noStroke();
    fill(60);
    translate(0, 133, 0);
    rect(0, 0, width, 15);
    translate(0, -133, 0);
  
    fill(80);
    circle(-500, 100, 50);
    bs1.run();
    fill(235, 235, 235, 2*r-120);
    rect(0, 0, width, height)  
    show_level(level, 40);
    translate(-500, 50, 0);
    fill(80, 80, 80);
    textSize(20);
    text('JUMP JUMP JUMP', 0, 0);
    translate(500, -50, 0)
    
    // 
  } else if (r < 220){
        fill(235, 235, 235, 255-255/(100)*(r-200));
      rect(0, 0, width, height)  
  } else if (r < 220 + word_arr2.length * 6){
    
    if (type_l2 == false){
      m_type.play();
      type_l2 = true;
    }

    
    show_level(level, 40);
    image(img1, -500, 100, 150, 150);
    
    image(img_d_box, -400, -20, 550, 150);

    fill(40, 40, 40, 200);
    textFont(font1);
    textSize(17);
    translate(-400, -45, 0)
    if ((r-220)/6 == floor((r-220)/6)){
      word2 = word2 + ' '+word_arr2[(r-220)/6];
    }
    //console.log(word2);
    text(word2, 0, 0);
    translate(400, 45, 0);
    
  } else if (r < 650){
    
    type_l2 = false;
    m_type.stop();
    show_level(level, 40);
    image(img1, -500, 100, 150, 150);
    image(img_d_box, -400, -20, 550, 150);
    
    fill(40, 40, 40, 200);
    textFont(font1);
    textSize(17);
    
    translate(-400, -45, 0)
    text(word2, 0, 0);
    translate(400, 45, 0)

  } else {
    scene_check = 'scene2';
  }


}

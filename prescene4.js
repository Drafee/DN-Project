let type_pre = false;
let i;
let word_arr = 'Hiya! I\'m a 1D creature. \nI can only move along the line \n with KEY A and D'.split(' ');
let word = '';

function prescene4(r){
  clear();
  background(235);
  r = r/2;
  
  if (r<150){ 
    //filled with black 
    
    fill(40);
    circle(100, 100, 2000);
    fill(235);
    circle(100, 100, 2000- r*r/22500*2000);
    
    fill(100, 100, 100, 100);
    textFont(font1)
    textSize(50);
    text('Imagine now a zero dimensional space…\n there’s no time or space, no mass…', 0, 0);
    
    
  } else if (r<250){
    // show level0
    fill(40);
    circle(100, 100, 2000);
    fill(100, 100, 100, 100);
    textFont(font1)
    textSize(50);
    text('Imagine now a zero dimensional space…\n there’s no time or space, no mass…', 0, 0);
    
    show_level(0, 100)
    
  } else if (r<320){
    // wait for suddenly
    fill(40);
    circle(100, 100, 2000);
        
    show_level(0, 100)
    fill(100, 100, 100, 100);
    textFont(font1);
    textSize(30);
    text('And...SUDDENLY', 0, 0);

    
  } else if (r<440){
    // condence to a black dot
    fill(235);
    circle(100, 100, 2000);
    fill(40);
    circle(100, 100, 2050- (r-320)**(2)/14400*2000);
    
    show_level(level, 40)
    
    fill(100, 100, 100, 200);
    textFont(font1);
    textSize(50);
    translate(100, 0, 0)
    text('A POINT APPEARS', 0, 0);
    translate(-100, 0, 0)

    
  } else if (r < 500){
    
    // level up thing
    
    fill(40);
    circle(100, 100, 50);
    
    fill(100, 100, 100, 200);
    textFont(font1);
    textSize(50);
    translate(100, 0, 0)
    text('A POINT APPEARS', 0, 0);
    translate(-100, 0, 0)
    
    level_up(level, 500-r);
 
    
  } else if (r == 500)
  { level += 1;
       ml_flag = false;
             }else if (r < 550){
    // keep silent
    
    fill(40);
    circle(100, 100, 50);
    
    show_level(level, 40)
  } else if (r < 550 + word_arr.length*3){
    //speak
    if (type_pre == false){
        m_type.play();
      type_pre = true;
    }

    fill(40);
    circle(100, 100, 50);
    
    show_level(level, 40)
    image(img_d_box, 265, -15, 350, 150);

    fill(40, 40, 40, 200);
    textFont(font1);
    textSize(20);
    translate(275, -45, 0)
    if ((r-550)/3 == floor((r-550)/3)){
        word = word + ' '+word_arr[(r-550)/3];
    }
    text(word, 0, 0);
    translate(-275, 45, 0)
  } else if (r < 550 + word_arr.length*3+200){
    // create floor
    type_pre = false;
    m_type.stop();
    fill(40);
    circle(100, 100, 50);
    
    show_level(level, 40);
    image(img_d_box, 265, -15, 350, 150);
    translate(275, -45, 0);
    textSize(20);
    text('Hiya! I\'m a 1D creature. \nI can only move along the line \n with KEY A and D', 0, 0);
    translate(-275, 45, 0);
    
    noStroke();
    fill(60);
    translate(0, 133, 0);
    rect(0, 0, width*(r-(550 + word_arr.length*3))/200, 15);
    translate(0, -133, 0);

  } 
  else{
      scene_check = 'scene1';
  }


}
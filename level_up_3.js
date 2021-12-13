let type_l3 = false;
let word_arr3 = 'Welcome to 3D world!'.split(' ');
let word3 = '';

function level_up_3(r){
  
  clear()
  background(235);
  //r = 159;

  
  if (r < 60){
    //level up
    
    image(img2.image, img2.px, img2.py, 1.5*w, 1.5*w);

    level_up(level, 60-r);
    
    translate(img2.px, img2.py - 50, 0);
    fill(80, 80, 80);
    textSize(20);
    text('JUMP JUMP JUMP', 0, 0);
    translate(-img2.px, -img2.py + 50, 0)
  } //become brighter
  else if (r == 60){
    level += 1
    ml_flag = false;
  }

  else if (r<160){
    image(img2.image, img2.px, img2.py, 1.5*w, 1.5*w);
    fill(235, 235, 235, 2.55*(r-60));
    rect(0, 0, width, height)  
    show_level(level, 40);
    
    translate(img2.px, img2.py - 50, 0);
    textSize(20);
    text('JUMP JUMP JUMP', 0, 0);
    translate(-img2.px, -img2.py + 50, 0)
    
    // 
  } else if (r < 220){
        show_level(level, 40);
      image(img_girl, img2.px, img2.py, 1.5*w, 1.5*w)
      textSize(20);
      fill(235, 235, 235, 255-255/(60)*(r-160));
      rect(0, 0, width, height)  
      
  }  else if (r < 220 + word_arr3.length * 6){
    if (type_l3 == false){
      m_type.play();
      type_l3 = true;
    }
    show_level(level, 40);
    image(img_girl, img2.px, img2.py, 1.5*w, 1.5*w)
    image(img_d_box, img2.px+60, img2.py-110, 300, 100);

    fill(40, 40, 40, 200);
    textFont(font1);
    textSize(17);
    if ((r-220)/6 == floor((r-220)/6)){
      word3 = word3 + ' '+word_arr3[(r-220)/6];
    }
    //console.log(word2);
    translate(img2.px+60, img2.py-110, 0)
    text(word3, 0, 0);
    translate(-img2.px-60, -img2.py+110, 0)
    
  } else if (r < 400){
    
    type_l3 = false;
    m_type.stop();
    show_level(level, 40);
    image(img_girl, img2.px, img2.py, 1.5*w, 1.5*w)
    image(img_d_box, img2.px+60, img2.py-110, 300, 100);
    
    fill(40, 40, 40, 200);
    textFont(font1);
    textSize(17);
    
    translate(img2.px+60, img2.py-110, 0)
    text(word3, 0, 0);
    translate(-img2.px-60, -img2.py+110, 0)

  } else {
    scene_check = 'scene3';
  }


}
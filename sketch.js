//let scene_check = 'scene4';
let _point;
let ml_flag = false;
let flag = false;
let music;

let scene_check = 'startPage';
let frameCount1 = 0;
let frameCount2 = 0;
let frameCount3 = 0;
let frameCount4 = 0;
let frameCount5 = 0;
let frameCount6 = 0;
let level = 0;

let keep_on = false;
let count_key = 0;
let keyn = 0;

let bs_start, bs1, bs2, bs3, bs_end;
let G = 0.5;
let cute, cute4, cute5;
const sc=1/2;

function preload(){
  img_level = loadImage('pictures/level.JPG');
  img_d_box = loadImage('pictures/d_box.JPG');
  img1 = loadImage('pictures/1.png');
  img_2 = loadImage('pictures/2.png');
  img3 = loadImage('pictures/3.png');
  img4 = loadImage('pictures/4.png');
  img_girl = loadImage('pictures/girl.png');
  img_explain1 = loadImage('pictures/explain1.png');
  img_explain2 = loadImage('pictures/explain2.png');
  
  font1 = loadFont('font/ArchitectsDaughter-Regular.ttf');
  font2 = loadFont('font/GloriaHallelujah-Regular.ttf');
  
  bgm = loadSound('music/bgm.mp3');
  m_level_up = loadSound('music/level_up.mp3');
  m_type= loadSound('music/type.mp3');
  
}

function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
  // set all the item center mode
  textAlign(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  bgm.loop();

  
  // some item;
  point_x = createVector(100, 100)
  _point = new Point(point_x, 50, color(40, 40, 40));
  
  //image in scene 2;
  img2 = new imageMove(-248, -250);
  cute = new figure(0,-700+2*l)
  
  cute4 = new figure(0,-700+2*l)
  cute5 = new figure(0,-700+2*l)
  
  
  // blackhole in starter page
  bs_start = new System(-width/2, width/2, -height/2, height/2);
 
  bs_start.addblackhole(10000, 680, -200, 80);
   for (i=0;i<200;i++) {
    bs_start.addPlanet(color(255, 0, 0));
   }
  
  bs1 = new System(-600, -400, 120, 80);
 
  bs1.addblackhole(10000, -1000, 200, 40);
   for (i=0;i<20;i++) {
    bs1.addPlanet(color(80, 80, 80));
   }
  bs2 = new System(-width/2, width/2, -height/2, height/2);
 
  bs2.addblackhole(10000, 520, 520, 60);
   for (i=0;i<40;i++) {
    bs2.addPlanet(color(80, 80, 80));
   }


  bs3 = new System3D(-width/2, width/2,200, -200, -height/2, height/2);
  bs3.addblackhole3D(10000, 620, -10, 0, 30);
   for (i=0;i<60;i++) {
    bs3.addPlanet(color(80, 80, 80));
   }

    bs_end = new System(-width/2, width/2, -height/2, height/2);
 
  bs_end.addblackhole(10000, -600, 500, 80);
   for (i=0;i<200;i++) {
    bs_end.addPlanet(color(255, 0, 0));
   }
}

function draw() {
  if (scene_check == 'startPage'){
      startPage();
  }
  else if (scene_check == 'prescene1'){
    prescene1()
  }
  else if (scene_check == 'prescene2'){
    prescene2();
    
  }
  else if (scene_check == 'prescene3'){
    prescene3(frameCount - frameCount1);
  }
  else if (scene_check == 'prescene4'){
    prescene4(frameCount - frameCount2);
    
  }
  else if (scene_check == 'scene1'){
    scene1();
  }
  else if (scene_check == 'level_up_2'){
    level_up_2(frameCount - frameCount3);
  }
  else if (scene_check == 'scene2'){
    scene2();
  }
  
  else if (scene_check == 'scene3'){
    scene3();
  }
  else if (scene_check == 'level_up_3'){
    level_up_3(frameCount - frameCount4);
  }
  else if (scene_check == 'scene4'){
    scene4();
  }
  else if (scene_check == 'level_up_4'){
    level_up_4(frameCount - frameCount5);
  }
  else if (scene_check == 'Info'){
    Info()
  }
  else if (scene_check == 'scene4pre1'){
    scene4pre1();
  }
  else if (scene_check == 'scene4pre2'){
    scene4pre2();
  }
  else if (scene_check == 'scene4pre3'){
    scene4pre3();
  }
  else if (scene_check == 'level_up_5'){
    level_up_5(frameCount - frameCount6);
  }   else if (scene_check == 'scene5'){
    scene5();
  }  else if (scene_check == 'ending'){
    ending();
  }

  
  if (keep_on == true){
    count_key += 1
      if (count_key % 10 == 1){
        keep_calling(keyn);
    }
  } else{
    count_key = 0;
  }

}

function mouseClicked(){
  
  if (scene_check == 'startPage'){
    if (checkClickStart()){
      scene_check = 'prescene1';
      //frameCount1 = frameCount;
      
    }
    /*
    else if (checkClickInfo()){
      scene_check = 'info'
    }
    */
    
  }
  else if (scene_check == 'prescene1'){
    scene_check = 'prescene2'
  }
  else if (scene_check == 'prescene2'){
    scene_check = 'prescene3'
    frameCount1 = frameCount;
  }
  else if (scene_check == 'scene4pre1'){
    scene_check = 'scene4pre2'
  }   else if (scene_check == 'scene4pre2'){
    scene_check = 'scene4pre3'
  }
    else if (scene_check == 'scene4pre3'){
    scene_check = 'scene4'
  } else if (scene_check == 'ending'){
    if (endcheckClickStart()){
      scene_check = 'startPage'
    }
  }
  
}


function show_level(r, c){
    textAlign(LEFT);
    fill(c, c, c, 200);
    textFont(font1);
    textSize(50);
    translate(-600, -360, 0)
    text('Level ' +str(r) , 5, 20);
    translate(600, 360, 0)
    textAlign(CENTER);
}



function keyPressed() {
  // 
  keep_on = true;
  keyn = keyCode;
}
function keyReleased(){
  keep_on = false;
  flag = false;
}

function keep_calling(key){
  if (scene_check == 'scene1'){
    if (key == 65) {
      _point.applyForce(createVector(-50, 0));
    } else if (key == 68) {
      _point.applyForce(createVector(50, 0));
    }
    
  }else if (scene_check == 'scene2'){
      if (key == 65) {
        img2.moveLeft();
      } else if (key == 68) {
        img2.moveRight();
      } else if (key == 87) {
        img2.moveUp();
      } else if (key == 83) {
        img2.moveDown();
      }
  }
  else if (scene_check == 'scene3'){
      if (key == 65) {
        cute.moveLeft();
      } else if (key == 68) {
        cute.moveRight();
      } else if (key == 87) {
        cute.moveUp();
      } else if (key == 83) {
        cute.moveDown();
      }
  }
    else if (scene_check == 'scene4'){
      if (key == 65) {
        cute4.moveLeft();
      } else if (key == 68) {
        cute4.moveRight();
      } else if (key == 87) {
        cute4.moveUp();
      } else if (key == 83) {
        cute4.moveDown();
     } else if (key == 32 && flag == false && cute4.leftl + cute4.rightl + cute4.upl + cute4.downl == 0 && num_dupple4 > 0 && floor(cute4.p / cute4.l) != 0 && cute4.p % cute4.l != 0 && floor(cute4.p / cute4.l) != cute4.l-1 && cute4.p % cute4.l != cute4.l - 1)  {
        change(cute4.cell, floor(cute4.p / cute4.l), cute4.p % cute4.l, cute4.l)
       num_dupple4 = num_dupple4 - 1;
        flag =true;
      }
  }
  else if (scene_check == 'scene5'){
      if (key == 65) {
        cute5.moveLeft();
      } else if (key == 68) {
        cute5.moveRight();
      } else if (key == 87) {
        cute5.moveUp();
      } else if (key == 83) {
        cute5.moveDown();
      } else if (key == 32 && flag == false && cute5.leftl + cute5.rightl + cute5.upl + cute5.downl == 0 && num_dupple5 > 0 && floor(cute5.p / cute5.l) != 0 && cute5.p % cute5.l != 0 && floor(cute5.p / cute5.l) != cute5.l-1 && cute5.p % cute5.l != cute5.l - 1){
        change(cute5.cell, floor(cute5.p / cute5.l), cute5.p % cute5.l, cute5.l)
       num_dupple5 = num_dupple5 - 1;
        flag =true;
      }
  }
}

function level_up(l, t){
  if (ml_flag == false){
  m_level_up.play();
    ml_flag = true;
  }
  show_level(l, 40);
  noStroke();
  if (t < 30){
    fill(60);
    triangle(-400, -340 + t, -380, -360+t, -360, -340+t);
    fill(235);
    triangle(-390, -340 + t, -380, -350+ t, -370, -340+ t);
  
    fill(80);
    triangle(-400, -360+ t, -380, -380+ t, -360, -360+ t);
    fill(235);
    triangle(-390, -360+ t, -380, -370+ t, -370, -360+ t);
  }
  else{
    t = t-30;
    fill(60);
    triangle(-400, -340 + t, -380, -360+t, -360, -340+t);
    fill(235);
    triangle(-390, -340 + t, -380, -350+ t, -370, -340+ t);
  
    fill(80);
    triangle(-400, -360+ t, -380, -380+ t, -360, -360+ t);
    fill(235);
    triangle(-390, -360+ t, -380, -370+ t, -370, -360+ t);
  }
}

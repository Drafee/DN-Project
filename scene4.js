let num_dupple4 = 1;
let current4 = false;
let cells4 = [];
function scene4(){
  clear()
  background(220);
  show_level(level, 40);

  translate(-550, -200, 0)
  textSize(30);
  text('Doppelganger number: ' +str(num_dupple4) , 5, 10);
  translate(550, 200, 0)
  
  translate(-540, -50, 0)
  textSize(18);
  text('Doppelganger can only help you with\nsquares that are not on the edge and \n with odd row and column number', 0, 0);
  translate(540, 50, 0)
  if (current4 == false){
    n = (level + diffi)*2+1;
    l = 700/n;
    cols = level+diffi;
    rows = level+diffi;
    cells4 = reset(level+diffi, level+diffi, cells4);
    spoil(cells4, 1);
    current4 = true;
    cute4.activate(cells4);
  }
  
  light();
  align();
  drawSubjects(cells4, cute4);
  bs3.run();


}
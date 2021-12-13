let num_dupple5 = 2;
let current5 = false;
let cells5 = [];
function scene5(){
  clear()
  background(220);
  show_level(level, 40);

  translate(-550, -200, 0)
  textSize(30);
  text('Doppelganger number: ' +str(num_dupple5) , 5, 10);
  translate(550, 200, 0)
  
  translate(-540, -50, 0)
  textSize(18);
  text('Doppelganger can only help you with\nsquares that are not on the edge and \n with odd row and column number', 0, 0);
  translate(540, 50, 0)
  if (current5 == false){
    n = (level + diffi)*2+1;
    l = 700/n;
    cols = level+diffi;
    rows = level+diffi;
    cells5 = reset(level+diffi, level+diffi, cells5);
    spoil2(cells5, 3);
    current5 = true;
    cute5.activate(cells5);
  }
  
  light();
  align();
  drawSubjects(cells5, cute5);
  bs3.run();


}
w = 0;
diffi = 6;
let cells = [];
let current = false;
maze_wid = 800;
function scene2(){

  clear()
  background(235);
  noStroke()
  show_level(level, 40);
  if (current == false){
    cols = level+diffi;
    rows = level+diffi;
    cells = reset(level+diffi, level+diffi, cells);
    current = true;
  }
  for (var i = 0; i < cells.length; i++) {
    cells[i].show()
  }
  img2.display();
  bs2.run();
  
}


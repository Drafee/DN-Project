let cols;
let rows;
var xr = -1.2;//-1.2
var yr = 0;
let n = (level + diffi)*2+1;
let l = 700/n;
cells2 = []
let current2 = false;

function scene3(){

  clear()
  background(220);
  show_level(level, 40);

  if (current2 == false){
    n = (level + diffi)*2+1;
    l = 700/n;
    cols = level+diffi;
    rows = level+diffi;
    cells2 = reset(level+diffi, level+diffi, cells2);
    current2 = true;
    cute.activate(cells2);
  }
  
  light();
  align();
  drawSubjects(cells2, cute);
  bs3.run();


}

function light() {
	pointLight(255, 255, 255, 0, 0, 800);
	pointLight(255, 255, 255, 0, 0, 800);
	pointLight(255, 255, 255, 0, 0, 800);
}

function drawSubjects(cells, cutie) {
    //bottom
	//rotateY(PI);
	noStroke();
	ambientMaterial(80,80,80);
	box(700,l/3,700);
	
    
	ambientMaterial(95, 175, 199);
    translate(0, -l/6,0);
    box(700,l/500,700);
  /*
	translate(0, -z/3,0);
	rotateX(HALF_PI);
	plane(z*rows);
  	rotateX(-HALF_PI);

  */
  ambientMaterial(32,32,34)
  	//ambientMaterial(178,32,34);
	translate(0,-l/2, 0);
     //box(700, l, l);
    translate(0, 0,-350 + l/2);
    box(700, l, l);

    translate(0, 0,700 -l/2);
    box(700, l, l);
  
    //ambientMaterial(32,32,34);
    translate(-350 + l/2, 0,-350 + l/2);
    box(l, l, 700);
  
    translate(700 -l/2, 0,0);
    box(l, l, 700);
  
    translate(-700 +l/2+l, 0,-350);
    ambientMaterial(32,32,34);
    box(l, l, l);
  
   // translate()
  draw_objects(cells);
  cutie.display();
  /*
	for (var i = 0; i<3; i++){
		box(z,z*9,z);
		translate(-(z*5),(z*4),0);
		rotateZ(HALF_PI);
	}
	
	translate(0,z/2,0);
	box(z,z*8,z);
	translate(-z,-(z*3+z/2),0);
	box(z);
	translate(-z*2,0,0);
	box(z,z*2,z);
  */
}
function align() {
	rotateX(xr);
	//delete as necessary
	rotateY(yr);
	//or
	//rotateZ(yr);
}

function draw_objects(cells){
  celll = sqrt(cells.length)
  for (var i = 0; i < celll; i++){
    for (var j = 0; j < celll; j++){

      cube = cells[celll*i + j];

      	if (cube.walls.top) {
          box(3*l, l, l)

		}
      
		if (cube.walls.right) {
          translate(l, 0, l);
          box(l, l, 3*l);
          translate(-l, 0, -l);
        }
      translate(2*l, 0, 0);
      
    }
    translate(-700+l, 0, 2 * l);
  }

}
  
  
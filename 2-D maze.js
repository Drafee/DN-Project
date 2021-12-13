function reset(collum, row, cells) {

  cols = collum;
  rows = row;
  w = 600 / cols;
  startPoint = 0;
  endPoint = rows * rows - 1;
  

  stack = [];
  for (var y = 0; y < rows; y++) {
	for (var x = 0; x < cols; x++) {
	  cells.push(new Cell(x, y, cells));
	}
  }



  currentCell = cells[startPoint];
  stack.push(currentCell);
  calculateMaze();

  for (var i = 0; i < cells.length; i++)
	cells[i].addNeighbors();
  
  
  return cells;

}


function calculateMaze() {
	while (stack.length > 0) {
      //console.log(stack.length);
      //console.log(stack[0]);
		currentCell.visited = true;

		var next = currentCell.checkNeighbors();
      //console.log(next);
		if (next) {
			next.visited = true;
			stack.push(currentCell);
			removeWalls(currentCell, next);
			currentCell = next;
		} else if (stack.length > 0) {
			currentCell = stack.pop();
		}
	}
    /*
	for (var i = 0; i < cells.length; i++) {
		cells[i].show();
	}
    */
}

function index(x, y) {
	if (x < 0 || x > cols - 1 || y < 0 || y > rows - 1)
		return -1;
	return x + y * cols;
}
function removeWalls(a, b) {
	var x = a.x - b.x;
	if (x == 1) {
		a.walls.left = false;
		b.walls.right = false;
	} else if (x == -1) {
		a.walls.right = false;
		b.walls.left = false;
	}

	var y = a.y - b.y;
	if (y == 1) {
		a.walls.top = false;
		b.walls.bottom = false;
	} else if (y == -1) {
		a.walls.bottom = false;
		b.walls.top = false;
	}
}

let a = 1;
function Cell(x, y, cells) {
	this.x = x ;
	this.y = y;
	this.walls = {
		top: true,
		right: true,
		bottom: true,
		left: true
	}; // top right bottom left
	this.visited = false;

	this.f = 0;
	this.g = 0;
	this.h = 0;
	this.previous = undefined;
    this.parent = cells;
	this.checkNeighbors = function() {
		var neighbors = [];

		var top = this.parent[index(x, y - 1)];
		var right = this.parent[index(x + 1, y)];
		var bottom = this.parent[index(x, y + 1)];
		var left = this.parent[index(x - 1, y)];

		if (top && !top.visited) {
			neighbors.push(top);
		}
		if (right && !right.visited) {
			neighbors.push(right);
		}
		if (bottom && !bottom.visited) {
			neighbors.push(bottom);
		}
		if (left && !left.visited) {
			neighbors.push(left);
		}

		if (neighbors.length > 0) {
			var r = floor(random(0, neighbors.length))
			return neighbors[r];
		} else {
			return null;
		}
	}

	this.addNeighbors = function() {
		this.neighbors = [];

		var top = this.parent[index(x, y - 1)];
		var right = this.parent[index(x + 1, y)];
		var bottom = this.parent[index(x, y + 1)];
		var left = this.parent[index(x - 1, y)];
		if (top && !this.walls.top) {
			this.neighbors.push(top);
		}
		if (right && !this.walls.right) {
			this.neighbors.push(right);
		}
		if (bottom && !this.walls.bottom) {
			this.neighbors.push(bottom);
		}
		if (left && !this.walls.left) {
			this.neighbors.push(left);
		}
	}

	this.show = function() {
		var posx = this.x * w-300;
		var posy = this.y * w-300;
        stroke(47, 66, 97);
        strokeWeight(12);
		if (this.walls.top) {
			line(posx-a, posy-a, posx + w+a, posy+a)
		}
		if (this.walls.right) {
			line(posx + w-a, posy-a, posx + w+a, posy + w+a)
		}
		if (this.walls.bottom) {
			line(posx+w - a, posy +w - a, posx + a, posy + w+ a)
		}
		if (this.walls.left) {
			line(posx-a, posy + w - a, posx + a, posy + a);
		}
	}
}

function spoil(cell, n){
  c = 0;
  cl = sqrt(cell.length)

  while (c < n){
    row_num = floor(random(1, cl - 1));
    col_num = floor(random(1, cl - 1));
    change(cell, row_num, col_num, cl);
    c += 1;
    
    
  }
}

function change(cell, row_num, col_num, cl){
      cell[row_num * cl + col_num].walls.top = 1-cell[row_num * cl + col_num].walls.top;
    cell[(row_num - 1) * cl + col_num].walls.bottom = 1 - cell[(row_num - 1) * cl + col_num].walls.bottom;
    
    cell[row_num * cl + col_num].walls.left = 1-cell[row_num * cl + col_num].walls.left;
    cell[row_num * cl + col_num - 1].walls.right = 1-cell[row_num * cl + col_num - 1].walls.right;
    
    cell[row_num * cl + col_num].walls.right = 1-cell[row_num * cl + col_num].walls.right;
    cell[row_num * cl + col_num + 1].walls.left = 1-cell[row_num * cl + col_num + 1].walls.left;
    
    cell[row_num * cl + col_num].walls.bottom = 1-cell[row_num * cl + col_num].walls.bottom;
    cell[(row_num + 1) * cl + col_num].walls.top = 1-cell[(row_num + 1) * cl + col_num].walls.top;

}

function spoil2(cell, n){
  c = 0;
  cl = sqrt(cell.length)
  while (c < n){
    row_num = floor(random(2, cl - 2));
    col_num = floor(random(2, cl - 2));
    dir = floor(random(0, 4));
    if (dir == 0 && cell[row_num * cl + col_num].walls.top == false){
      cell[row_num * cl + col_num].walls.top = true;
      cell[(row_num - 1) * cl + col_num].walls.bottom = true;
      c += 1;
    }
    
    else if (dir == 1 && cell[row_num * cl + col_num].walls.left == false){
      cell[row_num * cl + col_num].walls.left = true;
      cell[row_num * cl + col_num - 1].walls.right = true;
      c += 1;
    }
    else if (dir == 2 && cell[row_num * cl + col_num].walls.right == false){
      cell[row_num * cl + col_num].walls.right = true;
      cell[row_num * cl + col_num + 1].walls.left = true;
      c += 1;
    }
    else if (dir == 3 && cell[row_num * cl + col_num].walls.bottom == false){
      cell[row_num * cl + col_num].walls.bottom = true;
      cell[(row_num  + 1)* cl + col_num].walls.top = true;
      c++;
    }
  }
}

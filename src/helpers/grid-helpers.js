/*
  Grid structure:

    x0  x1  x2  x3  x4  x5  x6  x7  x8  x9  xa  xb  xc  xd  xe  xf  
0x                                                                  
1x                                                                  
2x                                                                  
3x                  34                                              
4x                                                                  
5x                                                                  
6x                                                                  
7x                                                                  
8x                                                                  
9x                                                                  
ax                                                                  
bx                                                                  
cx                                                                  
dx                                                                  
ex                                                                  
fx                                                                  

*/

export const createInitialOpCodesGrid = () => {
  const grid = new Array(16);
  
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(16);
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = '';
    }
  }

  return grid;
};

// Set grid cell for op code `${msb}${lsb}` to value
export const setCellForOpCode = (opCodeString, value, grid) => {
  const msbValue = parseInt(opCodeString[0], 16);
  const lsbValue = parseInt(opCodeString[1], 16);

  const row = msbValue;
  const column = lsbValue;

  if (grid[msbValue][lsbValue]) {
    console.log("ERROR: Tried to set cell for", opCodeString, "but instruction for that op code already exists!");
    console.log("Tried to write", value, "over existing value", grid[row][column]);
  }
  grid[row][column] = value;
}

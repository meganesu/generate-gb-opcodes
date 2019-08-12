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
  const grid = new Array(17);
  
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(17);
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = '';
    }
  }

  for (let i = 0; i < 16; i++) {
    const hexStringForIndex = i.toString(16).toUpperCase();
    // set first row to ['', 'x0', ... , 'xF']
    grid[0][i+1] = `x${hexStringForIndex}`;
    // set first column to ['', '0x', ... , 'Fx']
    grid[i+1][0] = `${hexStringForIndex}x`;
  }

  return grid;
};

// Set grid cell for op code `${msb}${lsb}` to value
export const setCellForOpCode = (opCodeString, value, grid) => {
  const msbValue = parseInt(opCodeString[0], 16);
  const lsbValue = parseInt(opCodeString[1], 16);
  const row = msbValue + 1;
  const column = lsbValue + 1;
  if (grid[row][column]) {
    console.log("ERROR: Tried to set cell for", opCodeString, "but instruction for that op code already exists!");
    console.log("Tried to write", value, "over existing value", grid[row][column]);
  }
  grid[row][column] = value;
}

export const buildGridString = grid => {
  let stringToPrint = '';
  for (var row = 0; row < grid.length; row++) {
    stringToPrint = stringToPrint.concat(buildRowString(grid[row]).replace(/ /g, '&nbsp;'), '<br />');
  }

  return stringToPrint;
}

const buildRowString = rowArray => {
  let stringToPrint = '';
  for (var i = 0; i < rowArray.length; i++) {
    const mnemonic = rowArray[i].mnemonic || rowArray[i] || '';
    stringToPrint = stringToPrint.concat(mnemonic.padEnd(14, ' '));
  }
  return stringToPrint;
}

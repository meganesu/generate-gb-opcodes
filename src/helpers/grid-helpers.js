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

  for (let i = 0; i < grid.length; i += 1) {
    grid[i] = new Array(16);
    for (let j = 0; j < grid[i].length; j += 1) {
      grid[i][j] = {};
    }
  }

  return grid;
};

// Set grid cell for op code `${msb}${lsb}` to value
export const setCellForOpCode = (opCodeString, value, grids) => {
  let indexOfGridToUpdate = 0;
  let opCodeStringToPlaceInGrid = opCodeString;
  // if opCodeString is 2 characters long
  if (opCodeString.length === 4 && opCodeString.substring(0, 2).toUpperCase() === 'CB') {
    indexOfGridToUpdate = 1;
    opCodeStringToPlaceInGrid = opCodeString.substring(2);
  }

  const msbValue = parseInt(opCodeStringToPlaceInGrid[0], 16);
  const lsbValue = parseInt(opCodeStringToPlaceInGrid[1], 16);

  const row = msbValue;
  const column = lsbValue;

  const cellContainsInstruction = Object.keys(grids[indexOfGridToUpdate][msbValue][lsbValue]).length > 0;
  if (cellContainsInstruction) {
    /* eslint-disable no-console */
    console.error('ERROR: Tried to set cell for', opCodeString, 'but instruction for that op code already exists!');
    console.error('Tried to write', value, 'over existing value', grids[indexOfGridToUpdate][row][column]);
    /* eslint-enable no-console */
    return;
  }

  /* eslint-disable-next-line no-param-reassign */
  grids[indexOfGridToUpdate][row][column] = value;
};

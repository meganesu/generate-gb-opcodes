import { Fragment } from 'react';
import OpCodeTable from '../op-code-table';
import { generateAllInstructions } from '../../generators';
import { createInitialOpCodesGrid, setCellForOpCode } from '../../helpers/grid-helpers';

const App = () => {
  const grids = [];
  grids.push(createInitialOpCodesGrid());
  grids.push(createInitialOpCodesGrid());

  const instructions = generateAllInstructions();

  // iterate over opcodes to place objects into opCodesGrid
  instructions.forEach(instruction => {
    setCellForOpCode(instruction.opCode, instruction, grids);
  });

  return (
    <Fragment>
      <h2>8-bit op codes</h2>
      <OpCodeTable
        opCodesGrid={grids[0]}
        caption='Game Boy CPU instructions, organized by op code'
      />
      <h2>16-bit op codes, where the first 8 bits are 0xCB</h2>
      <OpCodeTable
        opCodesGrid={grids[1]}
        caption='Game Boy CPU instructions for op codes prefixed by "CB"'
      />
    </Fragment>
  );
};

export default App;

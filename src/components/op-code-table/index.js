import instructionGenerators from '../../generators';
import { createInitialOpCodesGrid, setCellForOpCode } from '../../helpers/grid-helpers';

// Set up:
const opCodesGrid = createInitialOpCodesGrid(); // opCodesGrid: Array[17][17]

// call each generator function
const generateAllInstructions = () => {
  let instructions = [];

  for (let generatorFunction of instructionGenerators) {
    instructions = instructions.concat(generatorFunction());
  }
  
  return instructions; // list containing all instruction objects
}

const instructions = generateAllInstructions();

// iterate over opcodes to place objects into opCodesGrid
instructions.forEach(instruction => {
  setCellForOpCode(instruction.opCode, instruction, opCodesGrid);
});

const OpCodeTable = () => (
  <table id="op-code-table">
    <caption>Game Boy CPU instructions, organized by op code</caption>
    <tbody>
      <tr>
        <td></td>
        {
          Array(16).fill('').map((value, index) => (
            <th scope="col" key={index.toString()}>{`x${index.toString(16).toUpperCase()}`}</th>
          ))
        }
      </tr>
      {
        opCodesGrid.map((gridRow, index) => (
          <tr>
            <th scope="row" key={index.toString()}>{`${index.toString(16).toUpperCase()}x`}</th>
            {
              gridRow.map(gridCell => (
                // TODO: Add unique key for these td cells. Should probably be based on coordinates of the cell.
                <td className="instruction">
                {
                  gridCell.mnemonic ? gridCell.mnemonic : gridCell
                }
                </td>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default OpCodeTable;
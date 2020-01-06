import React, { useState, useRef } from 'react';
import OpCodeTable from '../op-code-table';
import DetailsSidebar from '../details-sidebar';
import { generateAllInstructions } from '../../generators';
import { createInitialOpCodesGrid, setCellForOpCode } from '../../helpers/grid-helpers';

const emptyInstruction = {
  mnemonic: '',
  type: '',
  flags: {
    CY: '',
    H: '',
    N: '',
    Z: '',
  },
  cycles: '',
  bytes: -1,
};

const App = () => {
  const grids = [];
  grids.push(createInitialOpCodesGrid());
  grids.push(createInitialOpCodesGrid());

  const instructions = generateAllInstructions();

  const [showSidebar, setShowSidebar] = useState(false);
  const [activeInstruction, setActiveInstruction] = useState(emptyInstruction);
  const [lastClickedInstructionCell, setLastClickedInstructionCell] = useState(null);
  const sidebarRef = useRef(null);

  const updateSidebar = (instruction, buttonRef) => {
    setActiveInstruction(instruction);
    setLastClickedInstructionCell(buttonRef);
    setShowSidebar(true);
    sidebarRef.current.focus();
  };

  const hideSidebar = () => {
    setShowSidebar(false);
    lastClickedInstructionCell.current.focus();
  };

  // iterate over opcodes to place objects into opCodesGrid
  instructions.forEach((instruction) => {
    setCellForOpCode(instruction.opCode, instruction, grids);
  });

  return (
    <>
      <main
        aria-label="Opcode tables"
        role="main"
      >
        <h2>8-bit opcodes</h2>
        <OpCodeTable
          opCodesGrid={grids[0]}
          caption="Game Boy CPU instructions, organized by opcode"
          setActiveInstruction={updateSidebar}
        />
        <h2>16-bit opcodes, where the first 8 bits are 0xCB</h2>
        <OpCodeTable
          opCodesGrid={grids[1]}
          caption='Game Boy CPU instructions for opcodes prefixed by "CB"'
          setActiveInstruction={updateSidebar}
        />
      </main>
      <DetailsSidebar
        activeInstruction={activeInstruction}
        hideSidebar={hideSidebar}
        isHidden={!showSidebar}
        lastClickedInstructionCellRef={lastClickedInstructionCell}
        sidebarRef={sidebarRef}
      />
    </>
  );
};

export default App;

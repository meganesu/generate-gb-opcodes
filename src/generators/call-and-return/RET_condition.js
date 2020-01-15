import React from 'react';
import { instructionTypes, conditions } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_RET_condition = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(conditions)
    .forEach(([condition, { binaryCode: conditionBinaryCode, text: conditionText }]) => {
      const instruction = {};

      instruction.mnemonic = `RET ${condition}`;
      instruction.type = instructionTypes.CALL_AND_RETURN;
      instruction.flags = {};
      instruction.cycles = '5/2'; // 5 if condition and flag status match; 2 if not match
      instruction.bytes = 1;

      const opCodeInBinary = `110${conditionBinaryCode}000`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instruction.description = (
        <>
          <p>
            {
              `If ${conditionText}, control is returned to the source program by popping`
              + ' from the memory stack the program counter PC value that was pushed'
              + ' to the stack when the subroutine was called.'
            }
          </p>
          <p>
            The contents of the address specified by the stack pointer SP are loaded
            in the lower-order byte of PC, and the contents of SP are incremented by 1.
            The contents of the address specified by the new SP value are then loaded
            in the higher-order byte of PC, and the contents of SP are incremented by 1
            again. (THe value of SP is 2 larger than before instruction execution.)
            The next instruction is fetched from the address specified by the content
            of PC (as usual).
          </p>
        </>
      );

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_RET_condition; // eslint-disable-line camelcase

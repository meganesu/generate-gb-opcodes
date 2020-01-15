import React from 'react';
import { instructionTypes, conditions } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_CALL_condition_a16 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(conditions)
    .forEach(([condition, { binaryCode: conditionBinaryCode, text: conditionText }]) => {
      const instruction = {};

      instruction.mnemonic = `CALL ${condition}, a16`;
      instruction.type = instructionTypes.CALL_AND_RETURN;
      instruction.flags = {};
      instruction.cycles = '6/3'; // 6 if condition and flag status match; 3 if not match
      instruction.bytes = 3;

      const opCodeInBinary = `110${conditionBinaryCode}100`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instruction.description = (
        <>
          <p>
            {
              `If ${conditionText}, the program counter PC value corresponding to the memory`
              + ' location of the instruction following the CALL instruction is pushed to the 2'
              + ' bytes following the memory byte specified by the stack pointer SP. The'
              + ' 16-bit immediate operand a16 is then loaded into PC.'
            }
          </p>
          <p>
            The lower-order byte of a16 is placed in byte 2 of the object code, and the
            higher-order byte is placed in byte 3.
          </p>
        </>
      );

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_CALL_condition_a16; // eslint-disable-line camelcase

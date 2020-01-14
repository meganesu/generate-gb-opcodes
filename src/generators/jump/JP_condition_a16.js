import React from 'react';
import { instructionTypes, conditions } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_JP_condition_a16 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(conditions)
    .forEach(([condition, { binaryCode: conditionBinaryCode, text: conditionText }]) => {
      const instruction = {};

      instruction.mnemonic = `JP ${condition}, a16`;
      instruction.type = instructionTypes.JUMP;
      instruction.flags = {};
      instruction.cycles = '4/3'; // 4 if condition and flag status match; 3 if not match
      instruction.bytes = 3;

      const opCodeInBinary = `110${conditionBinaryCode}010`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instruction.description = (
        <>
          <p>
            {
              'Load the 16-bit immediate operand a16 into the program counter PC if'
              + ` ${conditionText}. If ${conditionText}, then the subsequent instruction`
              + ' starts at address a16. If not, the contents of PC are incremented,'
              + ' and the next instruction following the current JP instruction is'
              + ' executed (as usual).'
            }
          </p>
          <p>
            The second byte of the object code (immediately following the opcode) corresponds
            to the lower-order byte of a16 (bits 0-7), and the third byte of the object code
            corresponds to the higher-order byte (bits 8-15).
          </p>
        </>
      );

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_JP_condition_a16; // eslint-disable-line camelcase

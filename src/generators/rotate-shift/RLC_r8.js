import React from 'react';
import { registerBinaryCodes, instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_RLC_r8 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(registerBinaryCodes)
    .forEach(([register, registerBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `RLC ${register}`;
      instruction.type = instructionTypes.ROTATE_SHIFT;
      instruction.flags = {
        CY: `${register}7`,
        H: '0',
        N: '0',
        Z: 'Z',
      };
      instruction.cycles = '2';
      instruction.bytes = 2;

      const opCodeInBinary = `1100101100000${registerBinaryCode}`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instruction.description = (
        <p>
          {
            `Rotate the contents of register ${register} to the left. That is, the contents of`
            + ' bit 0 are copied to bit 1, and the previous contents of bit 1 (before the copy'
            + ' operation) are copied to bit 2. The same operation is repeated in sequence for'
            + ' the rest of the register. The contents of bit 7 are placed in both the CY flag'
            + ` and bit 0 of register ${register}.`
          }
        </p>
      );

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_RLC_r8; // eslint-disable-line camelcase

import React from 'react';
import { registerBinaryCodes, instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_SWAP_r8 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(registerBinaryCodes)
    .forEach(([register, registerBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `SWAP ${register}`;
      instruction.type = instructionTypes.ROTATE_SHIFT;
      instruction.flags = {
        CY: '0',
        H: '0',
        N: '0',
        Z: 'Z',
      };
      instruction.cycles = '2';
      instruction.bytes = 2;

      const opCodeInBinary = `1100101100110${registerBinaryCode}`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instruction.description = (
        <p>
          {
            `Shift the contents of the lower-order four bits (0-3) of register ${register}`
            + ' to the higher-order four bits (4-7) of the register, and shift the higher-order'
            + ' four bits to the lower-order four bits.'
          }
        </p>
      );

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_SWAP_r8; // eslint-disable-line camelcase

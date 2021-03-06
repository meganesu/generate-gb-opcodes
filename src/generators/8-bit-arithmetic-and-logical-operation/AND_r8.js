import React from 'react';
import { instructionTypes, registerBinaryCodes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_AND_r8 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(registerBinaryCodes)
    .forEach(([register, registerBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `AND ${register}`;
      instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
      instruction.flags = {
        CY: '0',
        H: '1',
        N: '0',
        Z: 'Z',
      };
      instruction.cycles = '1';
      instruction.bytes = 1;

      const opCodeInBinary = `10100${registerBinaryCode}`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instruction.description = (
        <p>
          {
            `Take the logical AND for each bit of the contents of register ${register}`
            + ' and the contents of register A, and store the results in register A.'
          }
        </p>
      );

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_AND_r8; // eslint-disable-line camelcase

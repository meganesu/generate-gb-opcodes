import React from 'react';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';

const registerBinaryCodes = {
  A: '111',
  B: '000',
  C: '001',
  D: '010',
  E: '011',
  H: '100',
  L: '101',
};

const generate_ADD_A_r8 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(registerBinaryCodes)
    .forEach(([register, registerBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `ADD A, ${register}`;
      instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
      instruction.flags = {
        CY: '8-bit',
        H: '8-bit',
        N: '0',
        Z: 'Z',
      };
      instruction.cycles = '1';
      instruction.bytes = 1;

      const opCodeInBinary = `10000${registerBinaryCode}`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instruction.description = (
        <p>
          {`Add the contents of register ${register} to the contents of register A, and store the results in register A.`}
        </p>
      );

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_ADD_A_r8; // eslint-disable-line camelcase

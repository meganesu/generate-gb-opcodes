import React from 'react';
import { instructionTypes, registerBinaryCodes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_CP_r8 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(registerBinaryCodes)
    .forEach(([register, registerBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `CP ${register}`;
      instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
      instruction.flags = {
        CY: '8-bit',
        H: '8-bit',
        N: '1',
        Z: 'Z',
      };
      instruction.cycles = '1';
      instruction.bytes = 1;

      const opCodeInBinary = `10111${registerBinaryCode}`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instruction.description = (
        <>
          <p>
            {
              `Compare the contents of register ${register} and the contents of register A`
              + ` by calculating A - ${register}, and set the Z flag if they are equal.`
            }
          </p>
          <p>
            The execution of this instruction does not affect the contents of register A.
          </p>
        </>
      );

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_CP_r8; // eslint-disable-line camelcase

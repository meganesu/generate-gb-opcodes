import React from 'react';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';
import registerPairBinaryCodes from './constants';

const generate_ADD_HL_r16 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(registerPairBinaryCodes)
    .forEach(([registerPair, registerPairBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `ADD HL, ${registerPair}`;
      instruction.type = instructionTypes.SIXTEEN_BIT_ARITHMETIC_OPERATION;
      instruction.flags = {
        CY: '16-bit',
        H: '16-bit',
        N: '0',
      };
      instruction.cycles = '2';
      instruction.bytes = 1;

      const opCodeInBinary = `00${registerPairBinaryCode}1001`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instruction.description = (
        <p>
          {
            `Add the contents of register pair ${registerPair} to the contents of`
            + ' register pair HL, and store the results in register pair HL.'
          }
        </p>
      );

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_ADD_HL_r16; // eslint-disable-line camelcase

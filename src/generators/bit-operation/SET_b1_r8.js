import React from 'react';
import { registerBinaryCodes, instructionTypes } from '../constants';
import bitBinaryCodes from './constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_SET_b1_r8 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(bitBinaryCodes)
    .forEach(([bit, bitBinaryCode]) => {
      Object.entries(registerBinaryCodes)
        .forEach(([register, registerBinaryCode]) => {
          const instruction = {};

          instruction.mnemonic = `SET ${bit}, ${register}`;
          instruction.type = instructionTypes.BIT_OPERATION;
          instruction.flags = {};
          instruction.cycles = '2';
          instruction.bytes = 2;

          const opCodeInBinary = `1100101111${bitBinaryCode}${registerBinaryCode}`;
          instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

          instruction.description = (
            <p>
              {
                `Set bit ${bit} in register ${register} to 1.`
              }
            </p>
          );

          instructions.push(instruction);
        });
    });

  return instructions;
};

export default generate_SET_b1_r8; // eslint-disable-line camelcase

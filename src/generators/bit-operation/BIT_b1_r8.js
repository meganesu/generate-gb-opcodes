import { registerBinaryCodes, instructionTypes } from '../constants';
import { bitBinaryCodes } from './constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

export const generate_BIT_b1_r8 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(bitBinaryCodes)
    .forEach(([bit, bitBinaryCode]) => {
      Object.entries(registerBinaryCodes)
        .forEach(([register, registerBinaryCode]) => {
          const instruction = {};

          instruction.mnemonic = `BIT ${bit}, ${register}`;
          instruction.type = instructionTypes.BIT_OPERATION;
          instruction.flags = {
            CY: '',
            H: '1',
            N: '0',
            Z: '!rb',
          };
          instruction.cycles = 2;
          instruction.bytes = 2;

          const opCodeInBinary = `1100101101${bitBinaryCode}${registerBinaryCode}`;
          instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

          instructions.push(instruction);
        });
    });

  return instructions;
};

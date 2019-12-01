import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

import { instructionTypes, registerBinaryCodes } from '../constants';

// LD r, r'
export const generate_LD_r_from_rPrime = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(registerBinaryCodes)
    .forEach(([r, registerBinaryCode]) => {
      Object.entries(registerBinaryCodes)
        .forEach(([rPrime, rPrimeBinaryCode]) => {
          const instruction = {};

          instruction.mnemonic = `LD ${r}, ${rPrime}`; // LD A, B
          instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
          instruction.flags = {};
          instruction.cycles = 1;
          instruction.bytes = 1;

          const opCodeInBinary = `01${registerBinaryCode}${rPrimeBinaryCode}`;
          instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

          instructions.push(instruction);
        });
    });

  return instructions;
};

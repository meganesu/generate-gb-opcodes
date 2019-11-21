import { convertBinaryStringToHexString } from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes, registerBinaryCodes } from '../constants';

// LD r, r'
export const generate_LD_r_from_rPrime = () => { 
  const instructions = [];

  for (let r of Object.keys(registerBinaryCodes)) {
      for (let rPrime of Object.keys(registerBinaryCodes)) {
          const instruction = {};

          instruction.mnemonic = `LD ${r}, ${rPrime}`; // LD A, B
          instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
          instruction.flags = {};
          instruction.cycles = 1;
          instruction.bytes = 1;

          const opCodeInBinary = `01${registerBinaryCodes[r]}${registerBinaryCodes[rPrime]}`
          instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

          instructions.push(instruction);
      }
  }

  return instructions;
}

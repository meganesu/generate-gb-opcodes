import { registerBinaryCodes, instructionTypes } from "../constants";
import { bitBinaryValues } from './constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

export const generate_RES_b1_r8 = () => {
  const instructions = [];

  for (let bit in bitBinaryValues) {
    for (let register in registerBinaryCodes) {
      const instruction = {};

      instruction.mnemonic = `RES ${bit}, ${register}`;
      instruction.type = instructionTypes.BIT_OPERATION;
      instruction.flags = {}
      instruction.cycles = 2;
      instruction.bytes = 2;

      const opCodeInBinary = `1100101110${bitBinaryValues[bit]}${registerBinaryCodes[register]}`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instructions.push(instruction);
    }
  }

  return instructions;
}
import { instructionTypes } from "../constants";
import { bitBinaryValues } from './constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

export const generate_SET_b1_memory_at_HL = () => {
  const instructions = [];

  for (let bit in bitBinaryValues) {
    const instruction = {};

    instruction.mnemonic = `SET ${bit}, (HL)`;
    instruction.type = instructionTypes.BIT_OPERATION;
    instruction.flags = {}
    instruction.cycles = 4;
    instruction.bytes = 2;

    const opCodeInBinary = `1100101111${bitBinaryValues[bit]}110`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }

  return instructions;
}
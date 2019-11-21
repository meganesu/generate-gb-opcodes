import { instructionTypes } from "../constants";
import { bitBinaryValues } from './constants';
import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_BIT_b1_memory_at_HL = () => {
  const instructions = [];

  for (let bit in bitBinaryValues) {
    const instruction = {};

    instruction.mnemonic = `BIT ${bit}, (HL)`;
    instruction.type = instructionTypes.BIT_OPERATION;
    instruction.flags = {
      CY: '',
      H: '1',
      N: '0',
      Z: '!(HL)b'
    }
    instruction.cycles = 4;
    instruction.bytes = 2;

    const opCodeInBinary = `1100101101${bitBinaryValues[bit]}110`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }

  return instructions;
}
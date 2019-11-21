import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";
import { instructionTypes } from "../constants";
import { registerPairBinaryValues } from './constants';

export const generate_ADD_HL_r16 = () => {
  const instructions = [];

  for (let registerPair in registerPairBinaryValues) {
    const instruction = {};

    instruction.mnemonic = `ADD HL, ${registerPair}`;
    instruction.type = instructionTypes.SIXTEEN_BIT_ARITHMETIC_OPERATION;
    instruction.flags = {
      CY: '16-bit',
      H: '16-bit',
      N: '0'
    };
    instruction.cycles = 2;
    instruction.bytes = 1;

    const opCodeInBinary = `00${registerPairBinaryValues[registerPair]}1001`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }

  return instructions;
}
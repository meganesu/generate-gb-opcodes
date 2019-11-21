import { instructionTypes } from "../constants";
import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_ADD_SP_s8 = () => {
  const instruction = {};

  instruction.mnemonic = 'ADD SP, s8';
  instruction.type = instructionTypes.SIXTEEN_BIT_ARITHMETIC_OPERATION;
  instruction.flags = {
    CY: '16-bit',
    H: '16-bit',
    N: '0',
    Z: '0'
  };
  instruction.cycles = 4;
  instruction.bytes = 2;

  const opCodeInBinary = '11101000';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
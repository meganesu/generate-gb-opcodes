import { instructionTypes } from "../constants";
import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_DAA = () => {
  const instruction = {};

  instruction.mnemonic = 'DAA';
  instruction.type = instructionTypes.GENERAL_PURPOSE_ARITHMETIC_OPERATIONS_AND_CPU_CONTROL;
  instruction.flags = {
    CY: 'CY',
    H: '0',
    N: '-',
    Z: 'Z',
  };
  instruction.cycles = 1;
  instruction.bytes = 1;

  const opCodeInBinary = '00100111';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
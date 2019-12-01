import { instructionTypes } from "../constants";
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

export const generate_STOP = () => {
  const instruction = {};

  instruction.mnemonic = 'STOP';
  instruction.type = instructionTypes.GENERAL_PURPOSE_ARITHMETIC_OPERATIONS_AND_CPU_CONTROL;
  instruction.flags = {};
  instruction.cycles = 1;
  instruction.bytes = 2;

  const opCodeInBinary = '0001000000000000';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
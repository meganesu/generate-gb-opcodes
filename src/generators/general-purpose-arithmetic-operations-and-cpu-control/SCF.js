import { instructionTypes } from "../constants";
import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_SCF = () => {
  const instruction = {};

  instruction.mnemonic = 'SCF';
  instruction.type = instructionTypes.GENERAL_PURPOSE_ARITHMETIC_OPERATIONS_AND_CPU_CONTROL;
  instruction.flags = {
    CY: '1',
    H: '0',
    N: '0',
    Z: '-',
  };
  instruction.cycles = 1;
  instruction.bytes = 1;

  const opCodeInBinary = '00110111';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";
import { instructionTypes } from "../constants";

export const generate_JP_memory_at_HL = () => {
  const instruction = {};

  instruction.mnemonic = 'JP (HL)';
  instruction.type = instructionTypes.JUMP;
  instruction.flags = {};
  instruction.cycles = 1;

  const opCodeInBinary = '11101001';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
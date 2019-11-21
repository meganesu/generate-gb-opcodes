import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";
import { instructionTypes } from "../constants";

export const generate_JP_a16 = () => {
  const instruction = {};

  instruction.mnemonic = 'JP a16';
  instruction.type = instructionTypes.JUMP;
  instruction.flags = {};
  instruction.cycles = 4;
  instruction.bytes = 3;

  const opCodeInBinary = '11000011';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_LD_memory_at_C_from_A = () => {
  const instruction = {};

  instruction.mnemonic = "LD (C), A";
  instruction.flags = {};
  instruction.cycles = 2;

  const opCodeInBinary = "11100010";
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);
  
  return instruction;
}
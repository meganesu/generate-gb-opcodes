import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_LD_memory_at_a16_from_A = () => {
  const instruction = {};

  instruction.mnemonic = "LD (a16), A";
  instruction.flags = {};
  instruction.cycles = 4;

  const opCodeInBinary = "11101010";
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);
  
  return instruction;
}
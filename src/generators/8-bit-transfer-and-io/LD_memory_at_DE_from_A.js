import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_LD_memory_at_DE_from_A = () => {
  const instruction = {};

  instruction.mnemonic = "LD (DE), A";
  instruction.flags = {};
  instruction.cycles = 2;

  const opCodeInBinary = "00010010";
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);
  
  return instruction;
};
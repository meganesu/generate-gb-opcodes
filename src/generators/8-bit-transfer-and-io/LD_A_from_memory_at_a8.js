import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_LD_A_from_memory_at_a8 = () => {
  const instruction = {};

  instruction.mnemonic = "LD A, (a8)";
  instruction.flags = {};
  instruction.cycles = 3;

  const opCodeInBinary = "11110000";
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
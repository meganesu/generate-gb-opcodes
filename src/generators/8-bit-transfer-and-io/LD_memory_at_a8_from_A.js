import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_LD_memory_at_a8_from_A = () => {
  const instruction = {};

  instruction.mnemonic = "LD (a8), A";
  instruction.flags = {};
  instruction.cycles = 3;

  const opCodeInBinary = "11100000";
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_LD_A_from_memory_at_a16 = () => {
  const instruction = {};

  instruction.mnemonic = "LD A, (a16)";
  instruction.flags = {};
  instruction.cycles = 4;

  const opCodeInBinary = "11111010";
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
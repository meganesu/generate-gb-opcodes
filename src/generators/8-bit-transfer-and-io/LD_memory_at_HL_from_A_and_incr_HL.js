import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_LD_memory_at_HL_from_A_and_incr_HL = () => {
  const instruction = {};

  instruction.mnemonic = "LD (HL+), A";
  instruction.flags = {};
  instruction.cycles = 2;

  const opCodeInBinary = "00100010";
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};
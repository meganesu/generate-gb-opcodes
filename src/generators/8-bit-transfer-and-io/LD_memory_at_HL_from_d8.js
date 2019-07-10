import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_LD_memory_at_HL_from_d8 = () => {
  const instruction = {};
  instruction.mnemonic = "LD (HL), n8";
  instruction.flags = {};
  instruction.cycles = 3;

  const opCodeInBinary = "00110110";
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);
  return [instruction];
};

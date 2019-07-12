import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_LD_SP_from_HL = () => {
  const instruction = {};
  
  instruction.mnemonic = "LD SP, HL";
  instruction.flags = {};
  instruction.cycles = 2;

  const opCodeInBinary = "11111001";
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};
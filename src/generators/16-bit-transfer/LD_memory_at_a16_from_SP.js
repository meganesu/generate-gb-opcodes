import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_LD_memory_at_a16_from_SP = () => {
  const instruction = {};

  instruction.mnemonic = 'LD (a16), SP';
  instruction.flags = {};
  instruction.cycles = 5;

  const opCodeInBinary = '00001000';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};
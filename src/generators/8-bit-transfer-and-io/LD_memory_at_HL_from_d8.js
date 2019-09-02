import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";
import { instructionTypes } from '../constants';

export const generate_LD_memory_at_HL_from_d8 = () => {
  const instruction = {};

  instruction.mnemonic = "LD (HL), d8";
  instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
  instruction.flags = {};
  instruction.cycles = 3;

  const opCodeInBinary = "00110110";
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);
  return [instruction];
};

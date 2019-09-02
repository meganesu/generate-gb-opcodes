import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";
import { instructionTypes } from '../constants';

export const generate_LD_memory_at_BC_from_A = () => {
  const instruction = {};

  instruction.mnemonic = "LD (BC), A";
  instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
  instruction.flags = {};
  instruction.cycles = 2;

  const opCodeInBinary = "00000010";
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);
  
  return instruction;
};
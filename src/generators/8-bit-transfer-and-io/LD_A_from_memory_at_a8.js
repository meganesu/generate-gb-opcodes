import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";
import { instructionTypes } from '../constants';

export const generate_LD_A_from_memory_at_a8 = () => {
  const instruction = {};

  instruction.mnemonic = "LD A, (a8)";
  instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
  instruction.flags = {};
  instruction.cycles = 3;
  instruction.bytes = 2;

  const opCodeInBinary = "11110000";
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
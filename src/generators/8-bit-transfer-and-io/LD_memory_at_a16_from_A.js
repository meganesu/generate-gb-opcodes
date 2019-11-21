import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";
import { instructionTypes } from '../constants';

export const generate_LD_memory_at_a16_from_A = () => {
  const instruction = {};

  instruction.mnemonic = "LD (a16), A";
  instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
  instruction.flags = {};
  instruction.cycles = 4;
  instruction.bytes = 3;

  const opCodeInBinary = "11101010";
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);
  
  return instruction;
}
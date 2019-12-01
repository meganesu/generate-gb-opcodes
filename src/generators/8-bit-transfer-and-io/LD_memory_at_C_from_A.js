import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';

export const generate_LD_memory_at_C_from_A = () => {
  const instruction = {};

  instruction.mnemonic = "LD (C), A";
  instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
  instruction.flags = {};
  instruction.cycles = 2;
  instruction.bytes = 1;

  const opCodeInBinary = "11100010";
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);
  
  return instruction;
}
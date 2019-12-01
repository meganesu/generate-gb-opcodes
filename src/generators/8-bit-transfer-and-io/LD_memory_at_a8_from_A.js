import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';

export const generate_LD_memory_at_a8_from_A = () => {
  const instruction = {};

  instruction.mnemonic = "LD (a8), A";
  instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
  instruction.flags = {};
  instruction.cycles = 3;
  instruction.bytes = 2;

  const opCodeInBinary = "11100000";
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
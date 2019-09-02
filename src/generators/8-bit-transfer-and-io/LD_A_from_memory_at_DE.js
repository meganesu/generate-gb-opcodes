import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";
import { instructionTypes } from '../constants';

export const generate_LD_A_from_memory_at_DE = () => {
  const instruction = {};
  
  instruction.mnemonic = "LD A, (DE)";
  instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
  instruction.flags = {};
  instruction.cycles = 2;

  const opCodeInBinary = "00011010";
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return [instruction];
};

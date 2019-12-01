import { instructionTypes } from "../constants";
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

export const generate_SWAP_memory_at_HL = () => {
  const instruction = {};

  instruction.mnemonic = 'SWAP (HL)';
  instruction.type = instructionTypes.ROTATE_SHIFT;
  instruction.flags = {
    CY: '0',
    H: '0',
    N: '0',
    Z: 'Z'
  }
  instruction.cycles = 4;
  instruction.bytes = 2;

  const opCodeInBinary = '1100101100110110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
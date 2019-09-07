import { instructionTypes } from '../constants';
import { convertBinaryStringToHexString } from '../../helpers/convert-binary-string-to-hex-string';

export const generate_DEC_memory_at_HL = () => {
  const instruction = {};

  instruction.mnemonic = 'DEC (HL)';
  instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
  instruction.flags = {
    H: '8-bit',
    N: '1',
    Z: 'Z'
  };
  instruction.cycles = 3;

  const opCodeInBinary = '00110101';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
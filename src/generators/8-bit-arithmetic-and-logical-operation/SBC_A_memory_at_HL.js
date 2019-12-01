import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';


export const generate_SBC_A_memory_at_HL = () => {
  const instruction = {};

  instruction.mnemonic = 'SBC A, (HL)';
  instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
  instruction.flags = {
    CY: '8-bit',
    H: '8-bit',
    N: '1',
    Z: 'Z'
  };
  instruction.cycles = 2;
  instruction.bytes = 1;

  const opCodeInBinary = '10011110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

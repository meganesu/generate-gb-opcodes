import { instructionTypes } from '../constants';
import { convertBinaryStringToHexString } from '../../helpers/convert-binary-string-to-hex-string';

export const generate_ADC_A_d8 = () => {
  const instruction = {};

  instruction.mnemonic = 'ADC A, d8';
  instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
  instruction.flags = {
    CY: '8-bit',
    H: '8-bit',
    N: '0',
    Z: 'Z'
  };
  instruction.cycles = 2;

  const opCodeInBinary = '11001110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

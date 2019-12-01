import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';


export const generate_AND_d8 = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'AND d8';
  instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
  instruction.flags = {
    CY: '0',
    H: '1',
    N: '0',
    Z: 'Z',
  };
  instruction.cycles = 2;
  instruction.bytes = 2;

  const opCodeInBinary = '11100110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';


export const generate_OR_d8 = () => {
  const instruction = {};
  
  instruction.mnemonic = 'OR d8';
  instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
  instruction.flags = {
    CY: '0',
    H: '0',
    N: '0',
    Z: 'Z'
  }
  instruction.cycles = 2;
  instruction.bytes = 2;

  const opCodeInBinary = '11110110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';


export const generate_AND_memory_at_HL = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'AND (HL)';
  instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
  instruction.flags = {
    CY: '0',
    N: '0',
    H: '1',
    Z: 'Z',
  };
  instruction.cycles = 2;
  instruction.bytes = 1;

  const opCodeInBinary = '10100110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

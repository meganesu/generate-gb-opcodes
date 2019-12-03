import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_XOR_memory_at_HL = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'XOR (HL)';
  instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
  instruction.flags = {
    CY: '0',
    H: '0',
    N: '0',
    Z: 'Z',
  };
  instruction.cycles = 2;
  instruction.bytes = 1;

  const opCodeInBinary = '10101110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

export default generate_XOR_memory_at_HL; // eslint-disable-line camelcase

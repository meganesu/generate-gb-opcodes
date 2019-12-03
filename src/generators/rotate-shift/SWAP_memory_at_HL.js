import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_SWAP_memory_at_HL = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'SWAP (HL)';
  instruction.type = instructionTypes.ROTATE_SHIFT;
  instruction.flags = {
    CY: '0',
    H: '0',
    N: '0',
    Z: 'Z',
  };
  instruction.cycles = 4;
  instruction.bytes = 2;

  const opCodeInBinary = '1100101100110110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

export default generate_SWAP_memory_at_HL; // eslint-disable-line camelcase

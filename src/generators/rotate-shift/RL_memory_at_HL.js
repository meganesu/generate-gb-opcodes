import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_RL_memory_at_HL = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'RL (HL)';
  instruction.type = instructionTypes.ROTATE_SHIFT;
  instruction.flags = {
    CY: '(HL)7',
    H: '0',
    N: '0',
    Z: 'Z',
  };
  instruction.cycles = 4;
  instruction.bytes = 2;

  const opCodeInBinary = '1100101100010110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

export default generate_RL_memory_at_HL; // eslint-disable-line camelcase

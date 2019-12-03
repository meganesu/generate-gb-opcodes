import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_RLCA = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'RLCA';
  instruction.type = instructionTypes.ROTATE_SHIFT;
  instruction.flags = {
    CY: 'A7',
    H: '0',
    N: '0',
    Z: '0',
  };
  instruction.cycles = '1';
  instruction.bytes = 1;

  const opCodeInBinary = '00000111';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

export default generate_RLCA; // eslint-disable-line camelcase

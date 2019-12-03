import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';

const generate_LD_memory_at_HL_from_d8 = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'LD (HL), d8';
  instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
  instruction.flags = {};
  instruction.cycles = 3;
  instruction.bytes = 1;

  const opCodeInBinary = '00110110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);
  return [instruction];
};

export default generate_LD_memory_at_HL_from_d8; // eslint-disable-line camelcase

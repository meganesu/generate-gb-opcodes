import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

import { instructionTypes } from '../constants';

export const generate_LD_memory_at_a16_from_SP = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'LD (a16), SP';
  instruction.type = instructionTypes.SIXTEEN_BIT_TRANSFER;
  instruction.flags = {};
  instruction.cycles = 5;
  instruction.bytes = 3;

  const opCodeInBinary = '00001000';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

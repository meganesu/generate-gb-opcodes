import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

export const generate_RET = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'RET';
  instruction.type = instructionTypes.CALL_AND_RETURN;
  instruction.flags = {};
  instruction.cycles = 4;
  instruction.bytes = 1;

  const opCodeInBinary = '11001001';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

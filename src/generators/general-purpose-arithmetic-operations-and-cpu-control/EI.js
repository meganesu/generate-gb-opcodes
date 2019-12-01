import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

export const generate_EI = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'EI';
  instruction.type = instructionTypes.GENERAL_PURPOSE_ARITHMETIC_OPERATIONS_AND_CPU_CONTROL;
  instruction.flags = {};
  instruction.cycles = 1;
  instruction.bytes = 1;

  const opCodeInBinary = '11111011';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

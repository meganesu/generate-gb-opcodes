import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

export const generate_DI = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'DI';
  instruction.type = instructionTypes.GENERAL_PURPOSE_ARITHMETIC_OPERATIONS_AND_CPU_CONTROL;
  instruction.flags = {};
  instruction.cycles = 1;
  instruction.bytes = 1;

  const opCodeInBinary = '11110011';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

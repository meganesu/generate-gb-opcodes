import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

export const generate_CPL = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'CPL';
  instruction.type = instructionTypes.GENERAL_PURPOSE_ARITHMETIC_OPERATIONS_AND_CPU_CONTROL;
  instruction.flags = {
    CY: '-',
    H: '1',
    N: '1',
    Z: '-',
  };
  instruction.cycles = 1;
  instruction.bytes = 1;

  const opCodeInBinary = '00101111';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

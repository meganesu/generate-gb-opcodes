import { registerPairBinaryValues } from './constants';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';


export const generate_INC_r16 = () => {
  const instructions = [];

  for (let registerPair in registerPairBinaryValues) {
    const instruction = {};

    instruction.mnemonic = `INC ${registerPair}`;
    instruction.type = instructionTypes.SIXTEEN_BIT_ARITHMETIC_OPERATION;
    instruction.flags = {};
    instruction.cycles = 2;
    instruction.bytes = 1;

    const opCodeInBinary = `00${registerPairBinaryValues[registerPair]}0011`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }

  return instructions;
}
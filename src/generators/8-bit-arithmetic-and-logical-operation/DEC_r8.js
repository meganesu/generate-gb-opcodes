import { instructionTypes, registerBinaryCodes } from '../constants';
import { convertBinaryStringToHexString } from '../../helpers/convert-binary-string-to-hex-string';

export const generate_DEC_r8 = () => {
  const instructions = [];

  for (let register in registerBinaryCodes) {
    const instruction = {};

    instruction.mnemonic = `DEC ${register}`;
    instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
    instruction.flags = {
      H: '8-bit',
      N: '1',
      Z: 'Z'
    };
    instruction.cycles = 1;

    const opCodeInBinary = `00${registerBinaryCodes[register]}101`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }

  return instructions;
}
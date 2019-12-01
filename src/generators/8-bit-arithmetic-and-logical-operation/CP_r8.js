import { instructionTypes, registerBinaryCodes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';


export const generate_CP_r8 = () => {
  const instructions = [];

  for (let register in registerBinaryCodes) {
    const instruction = {};

    instruction.mnemonic = `CP ${register}`;
    instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
    instruction.flags = {
      CY: '8-bit',
      H: '8-bit',
      N: '1',
      Z: 'Z'
    };
    instruction.cycles = 1;
    instruction.bytes = 1;

    const opCodeInBinary = `10111${registerBinaryCodes[register]}`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }

  return instructions;
}
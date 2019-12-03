import { instructionTypes, registerBinaryCodes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_SUB_r8 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(registerBinaryCodes)
    .forEach(([register, registerBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `SUB ${register}`;
      instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
      instruction.flags = {
        CY: '8-bit',
        H: '8-bit',
        N: '1',
        Z: 'Z',
      };
      instruction.cycles = '1';
      instruction.bytes = 1;

      const opCodeInBinary = `10010${registerBinaryCode}`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_SUB_r8; // eslint-disable-line camelcase

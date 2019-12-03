import { instructionTypes, registerBinaryCodes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_AND_r8 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(registerBinaryCodes)
    .forEach(([register, registerBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `AND ${register}`;
      instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
      instruction.flags = {
        CY: '0',
        H: '1',
        N: '0',
        Z: 'Z',
      };
      instruction.cycles = '1';
      instruction.bytes = 1;

      const opCodeInBinary = `10100${registerBinaryCode}`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_AND_r8; // eslint-disable-line camelcase

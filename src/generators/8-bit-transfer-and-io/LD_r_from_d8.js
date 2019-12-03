import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

import { instructionTypes, registerBinaryCodes } from '../constants';

const generate_LD_r_from_d8 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(registerBinaryCodes)
    .forEach(([register, registerBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `LD ${register}, d8`;
      instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
      instruction.flags = {};
      instruction.cycles = '2';
      instruction.bytes = 2;

      const opCodeInBinary = `00${registerBinaryCode}110`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_LD_r_from_d8; // eslint-disable-line camelcase

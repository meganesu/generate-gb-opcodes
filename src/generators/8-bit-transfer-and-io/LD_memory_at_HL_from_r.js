import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

import { instructionTypes, registerBinaryCodes } from '../constants';

const generate_LD_memory_at_HL_from_r = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(registerBinaryCodes)
    .forEach(([register, registerBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `LD (HL), ${register}`;
      instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
      instruction.flags = {};
      instruction.cycles = 2;
      instruction.bytes = 1;

      const opCodeInBinary = `01110${registerBinaryCode}`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_LD_memory_at_HL_from_r; // eslint-disable-line camelcase

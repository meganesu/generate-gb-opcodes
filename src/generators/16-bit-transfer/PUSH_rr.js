import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

import { instructionTypes } from '../constants';

const registerPairBinaryCodes = {
  BC: '00',
  DE: '01',
  HL: '10',
  AF: '11',
};

const generate_PUSH_rr = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(registerPairBinaryCodes)
    .forEach(([register, registerPairBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `PUSH ${register}`;
      instruction.type = instructionTypes.SIXTEEN_BIT_TRANSFER;
      instruction.flags = {};
      instruction.cycles = 4;
      instruction.bytes = 1;

      const opCodeInBinary = `11${registerPairBinaryCode}0101`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_PUSH_rr; // eslint-disable-line camelcase

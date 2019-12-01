import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

import { instructionTypes } from '../constants';

const registerPairBinaryCodes = {
  "BC": "00",
  "DE": "01",
  "HL": "10",
  "AF": "11",
};

export const generate_PUSH_rr = () => {
  const instructions = [];

  for (let register in registerPairBinaryCodes) {
    const instruction = {};

    instruction.mnemonic = `PUSH ${register}`;
    instruction.type = instructionTypes.SIXTEEN_BIT_TRANSFER;
    instruction.flags = {};
    instruction.cycles = 4;
    instruction.bytes = 1;

    const opCodeInBinary = `11${registerPairBinaryCodes[register]}0101`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }

  return instructions;
}
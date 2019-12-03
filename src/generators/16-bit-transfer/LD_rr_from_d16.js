import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';

const registerPairBinaryCodes = {
  BC: '00',
  DE: '01',
  HL: '10',
  SP: '11',
};

const generate_LD_rr_from_d16 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(registerPairBinaryCodes)
    .forEach(([register, registerPairBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `LD ${register}, d16`;
      instruction.type = instructionTypes.SIXTEEN_BIT_TRANSFER;
      instruction.flags = {};
      instruction.cycles = 3;
      instruction.bytes = 3;

      const opCodeInBinary = `00${registerPairBinaryCode}0001`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_LD_rr_from_d16; // eslint-disable-line camelcase

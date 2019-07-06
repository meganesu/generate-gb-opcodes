import { convertBinaryStringToHexString } from '../../helpers/convert-binary-string-to-hex-string';
import { registerBinaryCodes } from './constants';

export const generate_LD_memory_at_HL_from_r = () => {
  const instructions = [];

  for (let register of Object.keys(registerBinaryCodes)) {
    const instruction = {};

    instruction.mnemonic = `LD (HL), ${register}`;
    instruction.flags = {};
    instruction.cycles = 2;

    const opCodeInBinary = `01110${registerBinaryCodes[register]}`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }

  return instructions;
}

import { convertBinaryStringToHexString } from '../../helpers/convert-binary-string-to-hex-string';
import { registerBinaryCodes } from './constants';

// LD r, n
export const generate_LD_r_from_d8 = () => {
  //  0  0 r2 r1 r0  1  1  0
  // n7 n6 n5 n4 n3 n2 n1 n0
  const instructions = [];

  for (let register of Object.keys(registerBinaryCodes)) {
    const instruction = {};

    instruction.mnemonic = `LD ${register}, d8`;
    instruction.flags = {};
    instruction.cycles = 2;

    const opCodeInBinary = `00${registerBinaryCodes[register]}110`
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }

  return instructions;
}

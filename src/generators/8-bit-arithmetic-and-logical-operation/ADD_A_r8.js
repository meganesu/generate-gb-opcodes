import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

const registerBinaryCodes = {
  A: '111',
  B: '000',
  C: '001',
  D: '010',
  E: '011',
  H: '100',
  L: '101',
};

export const generate_ADD_A_r8 = () => {
  const instructions = [];

  for (let register of Object.keys(registerBinaryCodes)) {
    const instruction = {};

    instruction.mnemonic = `ADD A, ${register}`;
    instruction.flags = {
      CY: '8-bit',
      H: '8-bit',
      N: '0',
      Z: 'Z',
    };
    instruction.cycles = 1;

    const opCodeInBinary = `10000${registerBinaryCodes[register]}`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }

  return instructions;
};
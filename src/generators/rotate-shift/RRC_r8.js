import { registerBinaryCodes, instructionTypes } from "../constants";
import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_RRC_r8 = () => {
  const instructions = [];

  for (let register in registerBinaryCodes) {
    const instruction = {};

    instruction.mnemonic = `RRC ${register}`;
    instruction.type = instructionTypes.ROTATE_SHIFT;
    instruction.flags = {
      CY: `${register}0`,
      H: '0',
      N: '0',
      Z: 'Z'
    };
    instruction.cycles = 2;

    const opCodeInBinary = `1100101100001${registerBinaryCodes[register]}`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }

  return instructions;
}
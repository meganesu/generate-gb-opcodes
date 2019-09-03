import { convertBinaryStringToHexString } from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes, registerBinaryCodes } from '../constants';

export const generate_LD_r_from_value_at_HL = () => {
  const instructions = [];

  for (let register of Object.keys(registerBinaryCodes)) {
    const instruction = {};
    
    instruction.mnemonic = `LD ${register}, (HL)`;
    instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
    instruction.flags = {};
    instruction.cycles = 2;

    const opCodeInBinary = `01${registerBinaryCodes[register]}110`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }
  return instructions;
}
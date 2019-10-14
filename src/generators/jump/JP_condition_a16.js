import { instructionTypes } from "../constants";
import { conditions } from './constants';
import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_JP_condition_a16 = () => {
  const instructions = [];

  for (let condition in conditions) {
    const instruction = {};

    instruction.mnemonic = `JP ${condition}, a16`;
    instruction.type = instructionTypes.JUMP;
    instruction.flags = {};
    instruction.cycles = '4/3'; // 4 if condition and flag status match; 3 if not match

    const opCodeInBinary = `110${conditions[condition]}010`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }
  
  return instructions;
}
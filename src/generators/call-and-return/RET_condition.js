import { instructionTypes, conditions } from "../constants";
import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_RET_condition = () => {
  const instructions = [];

  for (let condition in conditions) {
    const instruction = {};

    instruction.mnemonic = `RET ${condition}`;
    instruction.type = instructionTypes.CALL_AND_RETURN;
    instruction.flags = {};
    instruction.cycles = '5/2'; // 5 if condition and flag status match; 2 if not match

    const opCodeInBinary = `110${conditions[condition]}000`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }
  
  return instructions;
}
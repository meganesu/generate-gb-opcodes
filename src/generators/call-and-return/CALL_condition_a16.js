import { instructionTypes, conditions } from "../constants";
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

export const generate_CALL_condition_a16 = () => {
  const instructions = [];

  for (let condition in conditions) {
    const instruction = {};

    instruction.mnemonic = `CALL ${condition}, a16`;
    instruction.type = instructionTypes.CALL_AND_RETURN;
    instruction.flags = {};
    instruction.cycles = '6/3'; // 6 if condition and flag status match; 3 if not match
    instruction.bytes = 3;

    const opCodeInBinary = `110${conditions[condition]}100`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }
  
  return instructions;
}
import { instructionTypes, conditions } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

export const generate_RET_condition = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(conditions)
    .forEach(([condition, conditionBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `RET ${condition}`;
      instruction.type = instructionTypes.CALL_AND_RETURN;
      instruction.flags = {};
      instruction.cycles = '5/2'; // 5 if condition and flag status match; 2 if not match
      instruction.bytes = 1;

      const opCodeInBinary = `110${conditionBinaryCode}000`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instructions.push(instruction);
    });

  return instructions;
};

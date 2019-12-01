import { instructionTypes, conditions } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

export const generate_JP_condition_a16 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(conditions)
    .forEach(([condition, conditionBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `JP ${condition}, a16`;
      instruction.type = instructionTypes.JUMP;
      instruction.flags = {};
      instruction.cycles = '4/3'; // 4 if condition and flag status match; 3 if not match
      instruction.bytes = 3;

      const opCodeInBinary = `110${conditionBinaryCode}010`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instructions.push(instruction);
    });

  return instructions;
};

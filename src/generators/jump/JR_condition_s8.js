import { instructionTypes, conditions } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_JR_condition_s8 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(conditions)
    .forEach(([condition, conditionBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `JR ${condition}, s8`;
      instruction.type = instructionTypes.JUMP;
      instruction.flags = {};
      instruction.cycles = '3/2'; // 3 if condition and flag status match; 2 if not match
      instruction.bytes = 2;

      const opCodeInBinary = `001${conditionBinaryCode}000`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_JR_condition_s8; // eslint-disable-line camelcase

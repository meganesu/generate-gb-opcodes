import { instructionTypes, conditions } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_CALL_condition_a16 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(conditions)
    .forEach(([condition, { binaryCode: conditionBinaryCode }]) => {
      const instruction = {};

      instruction.mnemonic = `CALL ${condition}, a16`;
      instruction.type = instructionTypes.CALL_AND_RETURN;
      instruction.flags = {};
      instruction.cycles = '6/3'; // 6 if condition and flag status match; 3 if not match
      instruction.bytes = 3;

      const opCodeInBinary = `110${conditionBinaryCode}100`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_CALL_condition_a16; // eslint-disable-line camelcase

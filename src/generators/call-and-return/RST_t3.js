import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_RST_t3 = () => { // eslint-disable-line camelcase
  const instructions = [];

  for (let t = 0; t < 8; t += 1) {
    const instruction = {};

    instruction.mnemonic = `RST ${t}`;
    instruction.type = instructionTypes.CALL_AND_RETURN;
    instruction.flags = {};
    instruction.cycles = 4;
    instruction.bytes = 1;

    const tInBinary = t.toString(2).padStart(3, '0');
    const opCodeInBinary = `11${tInBinary}111`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }

  return instructions;
};

export default generate_RST_t3; // eslint-disable-line camelcase

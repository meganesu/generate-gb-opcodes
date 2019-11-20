import { instructionTypes } from "../constants";
import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_RST_t3 = () => {
  const instructions = [];

  for (let t = 0; t < 8; t++) {
    const instruction = {};

    instruction.mnemonic = `RST ${t}`;
    instruction.type = instructionTypes.CALL_AND_RETURN;
    instruction.flags = {};
    instruction.cycles = 4;

    const tInBinary = t.toString(2).padStart(3, '0');
    const opCodeInBinary = `11${tInBinary}111`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }

  return instructions;
}
import { instructionTypes } from "../constants";
import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_SLA_memory_at_HL = () => {
  const instruction = {};

  instruction.mnemonic = 'SLA (HL)';
  instruction.type = instructionTypes.ROTATE_SHIFT;
  instruction.flags = {
    CY: '(HL)7',
    H: '0',
    N: '0',
    Z: 'Z'
  }
  instruction.cycles = 4;

  const opCodeInBinary = '1100101100100110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
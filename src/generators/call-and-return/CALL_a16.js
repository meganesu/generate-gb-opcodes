import { instructionTypes } from "../constants";
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

export const generate_CALL_a16 = () => {
  const instruction = {};

  instruction.mnemonic = 'CALL a16';
  instruction.type = instructionTypes.CALL_AND_RETURN;
  instruction.flags = {};
  instruction.cycles = 6;
  instruction.bytes = 3;

  const opCodeInBinary = '11001101';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
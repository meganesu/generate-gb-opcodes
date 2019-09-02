import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";
import { instructionTypes } from '../constants';

export const generate_HL_from_SP_plus_s8 = () => {
  const instruction = {};

  instruction.mnemonic = 'LD HL, SP+s8';
  instruction.type = instructionTypes.SIXTEEN_BIT_TRANSFER;
  instruction.flags = {
    CY: '16-bit',
    H: '16-bit',
    N: 0,
    Z: 0
  }
  instruction.cycles = 3

  const opCodeInBinary = '11111000';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
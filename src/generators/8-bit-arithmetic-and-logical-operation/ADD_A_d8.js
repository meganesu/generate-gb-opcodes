import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_ADD_A_d8 = () => {
  const instruction = {};

  instruction.mnemonic = 'ADD A, d8';
  instruction.flags = {
    CY: '8-bit',
    H: '8-bit',
    N: '0',
    Z: 'Z'
  };
  instruction.cycles = 2;

  const opCodeInBinary = '11000110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
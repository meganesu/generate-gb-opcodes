import { convertBinaryStringToHexString } from '../../helpers/convert-binary-string-to-hex-string';
const registerPairBinaryCodes = {
  "BC": "00",
  "DE": "01",
  "HL": "10",
  "AF": "11",
};

export const generate_POP_rr = () => {
  const instructions = [];
  
  for (let register in registerPairBinaryCodes) {
    const instruction = {};

    instruction.mnemonic = `POP ${register}`;
    instruction.flags = {};
    instruction.cycles = 3;

    const opCodeInBinary = `11${registerPairBinaryCodes[register]}0001`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }

  return instructions;
}
import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

const registerPairBinaryCodes = {
  "BC": "00",
  "DE": "01",
  "HL": "10",
  "SP": "11"
};

export const generate_LD_rr_from_d16 = () => {
  const instructions = [];

  for (let register of Object.keys(registerPairBinaryCodes)) {
    const instruction = {};

    instruction.mnemonic = `LD ${register}, d16`;
    instruction.flags = {};
    instruction.cycles = 3;

    const opCodeInBinary = `00${registerPairBinaryCodes[register]}0001`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }

  return instructions;
}
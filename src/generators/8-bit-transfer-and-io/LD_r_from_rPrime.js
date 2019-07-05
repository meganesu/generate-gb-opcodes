import { convertBinaryStringToHexString } from '../../helpers/convert-binary-string-to-hex-string';

const registerBinaryCodes = {
  A: '111',
  B: '000',
  C: '001',
  D: '101',
  E: '011',
  H: '100',
  L: '101'
}

// LD r, r'
export const generate_LD_r_from_rPrime = () => { 
  const instructions = [];

  for (let r of Object.keys(registerBinaryCodes)) {
      for (let rPrime of Object.keys(registerBinaryCodes)) {
          if (r === rPrime) continue;

          const instruction = {};

          instruction.mnemonic = `LD ${r}, ${rPrime}`; // LD A, B
          instruction.flags = {};
          instruction.cycles = 1;

          const opCodeInBinary = `01${registerBinaryCodes[r]}${registerBinaryCodes[rPrime]}`
          instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

          instructions.push(instruction);
      }
  }

  return instructions;
}

import React from 'react';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';

const generate_JP_memory_at_HL = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'JP (HL)';
  instruction.type = instructionTypes.JUMP;
  instruction.flags = {};
  instruction.cycles = '1';
  instruction.bytes = 1;

  const opCodeInBinary = '11101001';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      Load the contents of register pair HL into the program counter PC. The next
      instruction is fetched from the location specified by the new value of PC.
    </p>
  );

  return instruction;
};

export default generate_JP_memory_at_HL; // eslint-disable-line camelcase

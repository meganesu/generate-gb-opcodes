import React from 'react';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

import { instructionTypes } from '../constants';

const generate_LD_memory_at_a16_from_SP = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'LD (a16), SP';
  instruction.type = instructionTypes.SIXTEEN_BIT_TRANSFER;
  instruction.flags = {};
  instruction.cycles = '5';
  instruction.bytes = 3;

  const opCodeInBinary = '00001000';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      {
        'Store the lower byte of stack pointer SP at the address specified by the'
        + ' 16-bit immediate operand a16, and store the upper byte of SP at address a16 + 1.'
      }
    </p>
  );

  return instruction;
};

export default generate_LD_memory_at_a16_from_SP; // eslint-disable-line camelcase

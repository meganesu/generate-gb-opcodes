import React from 'react';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';

const generate_LD_A_from_memory_at_a16 = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'LD A, (a16)';
  instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
  instruction.flags = {};
  instruction.cycles = '4';
  instruction.bytes = 3;

  const opCodeInBinary = '11111010';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      {
        'Load into register A the contents of the internal RAM or register '
        + 'specified by the 16-bit immediate operand a16.'
      }
    </p>
  );

  return instruction;
};

export default generate_LD_A_from_memory_at_a16; // eslint-disable-line camelcase

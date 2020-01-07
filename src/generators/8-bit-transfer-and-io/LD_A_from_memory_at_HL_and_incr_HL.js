import React from 'react';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';

const generate_LD_A_from_memory_at_HL_and_incr_HL = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'LD A, (HL+)';
  instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
  instruction.flags = {};
  instruction.cycles = '2';
  instruction.bytes = 1;

  const opCodeInBinary = '00101010';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      {
        'Load the contents of memory specified by register pair HL'
        + ' into register A, and simultaneously increment the contents of HL.'
      }
    </p>
  );

  return instruction;
};

export default generate_LD_A_from_memory_at_HL_and_incr_HL; // eslint-disable-line camelcase

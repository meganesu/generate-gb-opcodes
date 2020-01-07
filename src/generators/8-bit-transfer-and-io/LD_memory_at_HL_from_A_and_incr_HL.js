import React from 'react';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';

const generate_LD_memory_at_HL_from_A_and_incr_HL = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'LD (HL+), A';
  instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
  instruction.flags = {};
  instruction.cycles = '2';
  instruction.bytes = 1;

  const opCodeInBinary = '00100010';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      {
        'Store the contents of register A into the memory location specified'
        + ' by register pair HL, and simultaneously increment the contents of HL.'
      }
    </p>
  );

  return instruction;
};

export default generate_LD_memory_at_HL_from_A_and_incr_HL; // eslint-disable-line camelcase

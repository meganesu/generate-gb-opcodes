import React from 'react';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';

const generate_LD_memory_at_BC_from_A = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'LD (BC), A';
  instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
  instruction.flags = {};
  instruction.cycles = '2';
  instruction.bytes = 1;

  const opCodeInBinary = '00000010';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      {
        'Store the contents of register A in the memory location'
        + ' specified by register pair BC.'
      }
    </p>
  );

  return instruction;
};

export default generate_LD_memory_at_BC_from_A; // eslint-disable-line camelcase

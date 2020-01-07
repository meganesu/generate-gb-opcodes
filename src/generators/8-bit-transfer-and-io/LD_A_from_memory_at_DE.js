import React from 'react';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';

const generate_LD_A_from_memory_at_DE = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'LD A, (DE)';
  instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
  instruction.flags = {};
  instruction.cycles = '2';
  instruction.bytes = 1;

  const opCodeInBinary = '00011010';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      Load the 8-bit contents of memory specified by register pair DE into register A.
    </p>
  );

  return [instruction];
};

export default generate_LD_A_from_memory_at_DE; // eslint-disable-line camelcase

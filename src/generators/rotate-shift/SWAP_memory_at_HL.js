import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_SWAP_memory_at_HL = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'SWAP (HL)';
  instruction.type = instructionTypes.ROTATE_SHIFT;
  instruction.flags = {
    CY: '0',
    H: '0',
    N: '0',
    Z: 'Z',
  };
  instruction.cycles = '4';
  instruction.bytes = 2;

  const opCodeInBinary = '1100101100110110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      Shift the contents of the lower-order four bits (0-3) of the contents of memory
      specified by register pair HL to the higher-order four bits (4-7) of that memory
      location, and shift the contents of the higher-order four bits to the lower-order
      four bits.
    </p>
  );

  return instruction;
};

export default generate_SWAP_memory_at_HL; // eslint-disable-line camelcase

import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_RLCA = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'RLCA';
  instruction.type = instructionTypes.ROTATE_SHIFT;
  instruction.flags = {
    CY: 'A7',
    H: '0',
    N: '0',
    Z: '0',
  };
  instruction.cycles = '1';
  instruction.bytes = 1;

  const opCodeInBinary = '00000111';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      Rotate the contents of register A to the left. That is, the contents of bit 0 are
      copied to bit 1, and the previous contents of bit 1 (before the copy operation) are
      copied to bit 2. The same operation is repeated in sequence for the rest of the register.
      The contents of bit 7 are placed in both the CY flag and bit 0 of register A.
    </p>
  );

  return instruction;
};

export default generate_RLCA; // eslint-disable-line camelcase

import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_RLA = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'RLA';
  instruction.type = instructionTypes.ROTATE_SHIFT;
  instruction.flags = {
    CY: 'A7',
    H: '0',
    N: '0',
    Z: '0',
  };
  instruction.cycles = '1';
  instruction.bytes = 1;

  const opCodeInBinary = '00010111';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      Rotate the contents of register A to the left, through the carry (CY) flag. That is, the
      contents of bit 0 are copied to bit 1, and the previous contents of bit 1 (before the copy
      operation) are copied to bit 2. The same operation is repeated in sequence for the rest of
      the register. The previous contents of the carry flag are copied to bit 0.
    </p>
  );

  return instruction;
};

export default generate_RLA; // eslint-disable-line camelcase

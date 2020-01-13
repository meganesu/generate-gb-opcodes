import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_RRCA = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'RRCA';
  instruction.type = instructionTypes.ROTATE_SHIFT;
  instruction.flags = {
    CY: 'A0',
    H: '0',
    N: '0',
    Z: '0',
  };
  instruction.cycles = '1';
  instruction.bytes = 1;

  const opCodeInBinary = '00001111';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      Rotate the contents of register A to the right. That is, the contents of bit 7 are copied to
      bit 6, and the previous contents of bit 6 (before the copy) are copied to bit 5. The same
      operation is repeated in sequence for the rest of the register. The contents of bit 0 are
      placed in both the CY flag and bit 7 of register A.
    </p>
  );

  return instruction;
};

export default generate_RRCA; // eslint-disable-line camelcase

import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_XOR_d8 = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'XOR d8';
  instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
  instruction.flags = {
    CY: '0',
    H: '0',
    N: '0',
    Z: 'Z',
  };
  instruction.cycles = '2';
  instruction.bytes = 2;

  const opCodeInBinary = '11101110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      Take the logical exclusive-OR for each bit of the contents of the 8-bit
      immediate operand d8 and the contents of register A, and store the results
      in register A.
    </p>
  );

  return instruction;
};

export default generate_XOR_d8; // eslint-disable-line camelcase

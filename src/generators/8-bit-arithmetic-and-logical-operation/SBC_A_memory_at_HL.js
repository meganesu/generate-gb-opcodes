import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_SBC_A_memory_at_HL = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'SBC A, (HL)';
  instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
  instruction.flags = {
    CY: '8-bit',
    H: '8-bit',
    N: '1',
    Z: 'Z',
  };
  instruction.cycles = '2';
  instruction.bytes = 1;

  instruction.description = (
    <p>
      Subtract the contents of memory specified by register pair HL and the carry flag CY
      from the contents of register A, and store the results in register A.
    </p>
  );

  const opCodeInBinary = '10011110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
};

export default generate_SBC_A_memory_at_HL; // eslint-disable-line camelcase

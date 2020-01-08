import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_ADD_SP_s8 = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'ADD SP, s8';
  instruction.type = instructionTypes.SIXTEEN_BIT_ARITHMETIC_OPERATION;
  instruction.flags = {
    CY: '16-bit',
    H: '16-bit',
    N: '0',
    Z: '0',
  };
  instruction.cycles = '4';
  instruction.bytes = 2;

  const opCodeInBinary = '11101000';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      Add the contents of the 8-bit signed (2&apos;s complement) immediate operand s8
      and the stack pointer SP and store the results in SP.
    </p>
  );

  return instruction;
};

export default generate_ADD_SP_s8; // eslint-disable-line camelcase

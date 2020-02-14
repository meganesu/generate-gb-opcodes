import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_CPL = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'CPL';
  instruction.type = instructionTypes.GENERAL_PURPOSE_ARITHMETIC_OPERATIONS_AND_CPU_CONTROL;
  instruction.flags = {
    H: '1',
    N: '1',
  };
  instruction.cycles = '1';
  instruction.bytes = 1;

  const opCodeInBinary = '00101111';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      Take the one&apos;s complement (i.e., flip all bits) of the contents of register A.
    </p>
  );

  return instruction;
};

export default generate_CPL; // eslint-disable-line camelcase

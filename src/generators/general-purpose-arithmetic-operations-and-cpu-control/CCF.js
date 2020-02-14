import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_CCF = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'CCF';
  instruction.type = instructionTypes.GENERAL_PURPOSE_ARITHMETIC_OPERATIONS_AND_CPU_CONTROL;
  instruction.flags = {
    CY: '!CY',
    H: '0',
    N: '0',
  };
  instruction.cycles = '1';
  instruction.bytes = 1;

  const opCodeInBinary = '00111111';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      Flip the carry flag CY.
    </p>
  );

  return instruction;
};

export default generate_CCF; // eslint-disable-line camelcase

import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_SCF = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'SCF';
  instruction.type = instructionTypes.GENERAL_PURPOSE_ARITHMETIC_OPERATIONS_AND_CPU_CONTROL;
  instruction.flags = {
    CY: '1',
    H: '0',
    N: '0',
  };
  instruction.cycles = '1';
  instruction.bytes = 1;

  const opCodeInBinary = '00110111';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      Set the carry flag CY.
    </p>
  );

  return instruction;
};

export default generate_SCF; // eslint-disable-line camelcase

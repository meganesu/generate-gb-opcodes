import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_CP_memory_at_HL = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'CP (HL)';
  instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
  instruction.flags = {
    CY: '8-bit',
    H: '8-bit',
    N: '1',
    Z: 'Z',
  };
  instruction.cycles = '2';
  instruction.bytes = 1;

  const opCodeInBinary = '10111110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <>
      <p>
        Compare the contents of memory specified by register pair HL and the contents
        of register A by calculating A - (HL), and set the Z flag if they are equal.
      </p>
      <p>
        The execution of this instruction does not affect the contents of register A.
      </p>
    </>
  );

  return instruction;
};

export default generate_CP_memory_at_HL; // eslint-disable-line camelcase

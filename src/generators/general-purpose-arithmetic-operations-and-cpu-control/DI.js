import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_DI = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'DI';
  instruction.type = instructionTypes.GENERAL_PURPOSE_ARITHMETIC_OPERATIONS_AND_CPU_CONTROL;
  instruction.flags = {};
  instruction.cycles = '1';
  instruction.bytes = 1;

  const opCodeInBinary = '11110011';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <>
      <p>
        Reset the interrupt master enable (IME) flag and prohibit maskable interrupts.
      </p>
      <p>
        Even if a DI instruction is executed in an interrupt routine, the IME
        flag is set if a return is performed with a RETI instruction.
      </p>
    </>
  );

  return instruction;
};

export default generate_DI; // eslint-disable-line camelcase

import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_EI = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'EI';
  instruction.type = instructionTypes.GENERAL_PURPOSE_ARITHMETIC_OPERATIONS_AND_CPU_CONTROL;
  instruction.flags = {};
  instruction.cycles = '1';
  instruction.bytes = 1;

  const opCodeInBinary = '11111011';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <>
      <p>
        Set the interrupt master enable (IME) flag and enable maskable interrupts. This
        instruction can be used in an interrupt routine to enable higher-order interrupts.
      </p>
      <p>
        The IME flag is reset immediately after an interrupt occurs. The IME flag reset
        remains in effect if control is returned from the interrupt routine by a RET
        instruction. However, if an EI instruction is executed in the interrupt routine,
        control is returned with IME = 1.
      </p>
    </>
  );

  return instruction;
};

export default generate_EI; // eslint-disable-line camelcase

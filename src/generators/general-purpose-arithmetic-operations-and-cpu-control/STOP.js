import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_STOP = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'STOP';
  instruction.type = instructionTypes.GENERAL_PURPOSE_ARITHMETIC_OPERATIONS_AND_CPU_CONTROL;
  instruction.flags = {};
  instruction.cycles = '1';
  instruction.bytes = 2;

  const opCodeInBinary = '0001000000000000';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <>
      <p>
        Execution of a STOP instruction stops both the system clock and oscillator circuit.
        STOP mode is entered and the LCD controller also stops. However, the status of the
        internal RAM register ports remains unchanged.
      </p>
      <p>
        STOP mode can be cancelled by a reset signal.
      </p>
      <p>
        If the RESET terminal goes LOW in STOP mode, it becomes that of a normal reset status.
      </p>
      <p>
        The following conditions should be met before a STOP instruction is executed
        and stop mode is entered:
      </p>
      <ul>
        <li>All interrupt-enable (IE) flags are reset.</li>
        <li>Input to P10-P13 is LOW for all.</li>
      </ul>
    </>
  );

  return instruction;
};

export default generate_STOP; // eslint-disable-line camelcase

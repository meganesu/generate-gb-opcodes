import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_HALT = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'HALT';
  instruction.type = instructionTypes.GENERAL_PURPOSE_ARITHMETIC_OPERATIONS_AND_CPU_CONTROL;
  instruction.flags = {};
  instruction.cycles = '1';
  instruction.bytes = 1;

  const opCodeInBinary = '01110110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <>
      <p>
        After a HALT instruction is executed, the system clock is stopped and HALT mode
        is entered. Although the system clock is stopped in this status, the oscillator
        circuit and LCD controller continue to operate.
      </p>
      <p>
        In addition, the status of the internal RAM register ports remains unchanged.
      </p>
      <p>
        HALT mode is cancelled by an interrupt or reset signal.
      </p>
      <p>
        The program counter is halted at the step after the HALT instruction. If both
        the interrupt request flag and the corresponding interrupt enable flag are set,
        HALT mode is exited, even if the interrupt master enable flag is not set.
      </p>
      <p>
        Once HALT mode is cancelled, the program starts from the address indicated by
        the program counter.
      </p>
      <p>
        If the interrupt master enable flag is set, the contents of the program coounter
        are pushed to the stack and control jumps to the starting address of the interrupt.
      </p>
      <p>
        If the RESET terminal goes LOW in HALT moode, the mode becomes that of a normal reset.
      </p>
    </>
  );

  return instruction;
};

export default generate_HALT; // eslint-disable-line camelcase

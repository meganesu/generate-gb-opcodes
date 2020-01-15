import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_RETI = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'RETI';
  instruction.type = instructionTypes.CALL_AND_RETURN;
  instruction.flags = {};
  instruction.cycles = '4';
  instruction.bytes = 1;

  const opCodeInBinary = '11011001';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <>
      <p>
        Used when an interrupt-service routine finishes. The address for the return
        from the interrupt is loaded in the program counter PC. The master interrupt
        enable flag is returned to its pre-interrupt status.
      </p>
      <p>
        The contents of the address specified by the stack pointer SP are loaded
        in the lower-order byte of PC, and the contents of SP are incremented by 1.
        The contents of the address specified by the new SP value are then loaded
        in the higher-order byte of PC, and the contents of SP are incremented by 1
        again. (THe value of SP is 2 larger than before instruction execution.)
        The next instruction is fetched from the address specified by the content
        of PC (as usual).
      </p>
    </>
  );

  return instruction;
};

export default generate_RETI; // eslint-disable-line camelcase

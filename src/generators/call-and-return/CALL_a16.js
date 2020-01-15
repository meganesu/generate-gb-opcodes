import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_CALL_a16 = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'CALL a16';
  instruction.type = instructionTypes.CALL_AND_RETURN;
  instruction.flags = {};
  instruction.cycles = '6';
  instruction.bytes = 3;

  const opCodeInBinary = '11001101';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <>
      <p>
        In memory, push the program counter PC value corresponding to the address
        following the CALL instruction to the 2 bytes following the byte specified
        by the current stack pointer SP. Then load the 16-bit immediate operand a16
        into PC.
      </p>
      <p>
        The subroutine is placed after the location specified by the new PC value.
        When the subroutine finishes, control is returned to the source program
        using a return instruction and by popping the starting address of the next
        instruction (which was just pushed) and moving it to the PC.
      </p>
      <p>
        With the push, the current value of SP is decremented by 1, and the higher-order
        byte of PC is loaded in the memory address specified by the new SP value. The
        value of SP is then decremented by 1 again, and the lower-order byte of PC is
        loaded in the memory address specified by that value of SP.
      </p>
      <p>
        The lower-order byte of a16 is placed in byte 2 of the object code, and the
        higher-order byte is placed in byte 3.
      </p>
    </>
  );

  return instruction;
};

export default generate_CALL_a16; // eslint-disable-line camelcase

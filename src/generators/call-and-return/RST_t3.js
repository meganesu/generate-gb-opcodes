import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_RST_t3 = () => { // eslint-disable-line camelcase
  const instructions = [];

  for (let t = 0; t < 8; t += 1) {
    const instruction = {};

    instruction.mnemonic = `RST ${t}`;
    instruction.type = instructionTypes.CALL_AND_RETURN;
    instruction.flags = {};
    instruction.cycles = '4';
    instruction.bytes = 1;

    const tInBinary = t.toString(2).padStart(3, '0');
    const opCodeInBinary = `11${tInBinary}111`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    const addrOfTthByteInPage0Binary = (t * 8).toString(2).padStart(2, '0');
    const addrOfTthByteInPage0Hex = convertBinaryStringToHexString(addrOfTthByteInPage0Binary);

    instruction.description = (
      <>
        <p>
          {
            'Push the current value of the program counter PC onto the memory stack, and'
            + ` load into PC the ${t + 1}th byte of page 0 memory addresses, 0x${addrOfTthByteInPage0Hex}.`
            + ' The next instruction is fetched from the address specified by the new content of'
            + ' PC (as usual).'
          }
        </p>
        <p>
          With the push, the contents of the stack pointer SP are decremented by 1,
          and the higher-order byte of PC is loaded in the memory address specified
          by the new SP value. The value of SP is then again decremented by 1, and the
          lower-order byte of the PC is loaded in the memory address specified by that
          value of SP.
        </p>
        <p>
          {
            'The RST instruction can be used to jump to 1 of 8 addresses. Because all of'
            + 'the addresses are held in page 0 memory, 0x00 is loaded in the higher-order'
            + `byte of the PC, and 0x${addrOfTthByteInPage0Hex} is loaded in the lower-order byte.`
          }
        </p>
      </>
    );

    instructions.push(instruction);
  }

  return instructions;
};

export default generate_RST_t3; // eslint-disable-line camelcase

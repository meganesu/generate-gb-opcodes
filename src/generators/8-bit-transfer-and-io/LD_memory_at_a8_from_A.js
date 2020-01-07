import React from 'react';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';
import { listMemoryFromFF00toFFFF, memoryAtA8Disclaimer } from './constants';

const generate_LD_memory_at_a8_from_A = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'LD (a8), A';
  instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
  instruction.flags = {};
  instruction.cycles = '3';
  instruction.bytes = 2;

  const opCodeInBinary = '11100000';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <>
      <p>
        {
          'Store the contents of register A in the internal RAM, port register,'
          + ' or mode register at the address in the range 0xFF00-0xFFFF'
          + ' specified by the 8-bit immediate operand a8.'
        }
      </p>
      {memoryAtA8Disclaimer}
      {listMemoryFromFF00toFFFF}
    </>
  );

  return instruction;
};

export default generate_LD_memory_at_a8_from_A; // eslint-disable-line camelcase

import React from 'react';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';
import { listMemoryFromFF00toFFFF } from './constants';

const generate_LD_A_from_memory_at_C = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'LD A, (C)';
  instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
  instruction.flags = {};
  instruction.cycles = '2';
  instruction.bytes = 1;

  const opCodeInBinary = '11110010';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <>
      <p>
        {
          'Load into register A the contents of the internal RAM, port register,'
          + ' or mode register at the address in the range 0xFF00-0xFFFF'
          + ' specified by register C.'
        }
      </p>
      {listMemoryFromFF00toFFFF}
    </>
  );

  return instruction;
};

export default generate_LD_A_from_memory_at_C; // eslint-disable-line camelcase

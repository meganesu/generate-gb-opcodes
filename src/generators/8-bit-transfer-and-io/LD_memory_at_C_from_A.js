import React from 'react';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';
import { listMemoryFromFF00toFFFF } from './constants';

const generate_LD_memory_at_C_from_A = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'LD (C), A';
  instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
  instruction.flags = {};
  instruction.cycles = '2';
  instruction.bytes = 1;

  const opCodeInBinary = '11100010';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <>
      <p>
        {
          'Store the contents of register A in the internal RAM, port register,'
          + ' or mode register at the address in the range 0xFF00-0xFFFF'
          + ' specified by register C.'
        }
      </p>
      {listMemoryFromFF00toFFFF}
    </>
  );

  return instruction;
};

export default generate_LD_memory_at_C_from_A; // eslint-disable-line camelcase

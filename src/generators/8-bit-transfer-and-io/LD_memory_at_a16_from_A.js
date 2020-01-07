import React from 'react';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';

const generate_LD_memory_at_a16_from_A = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'LD (a16), A';
  instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
  instruction.flags = {};
  instruction.cycles = '4';
  instruction.bytes = 3;

  const opCodeInBinary = '11101010';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      {
        'Store the contents of register A in the internal RAM or register '
        + 'specified by the 16-bit immediate operand a16.'
      }
    </p>
  );

  return instruction;
};

export default generate_LD_memory_at_a16_from_A; // eslint-disable-line camelcase

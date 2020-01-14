import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_JR_s8 = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'JR s8'; // jump relative
  instruction.type = instructionTypes.JUMP;
  instruction.flags = {};
  instruction.cycles = '3';
  instruction.bytes = 2;

  const opCodeInBinary = '00011000';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      Jump s8 steps from the current address in the program counter (PC). (Jump relative.)
    </p>
  );

  return instruction;
};

export default generate_JR_s8; // eslint-disable-line camelcase

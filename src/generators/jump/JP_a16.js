import React from 'react';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';
import { instructionTypes } from '../constants';

const generate_JP_a16 = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'JP a16';
  instruction.type = instructionTypes.JUMP;
  instruction.flags = {};
  instruction.cycles = '4';
  instruction.bytes = 3;

  const opCodeInBinary = '11000011';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <>
      <p>
        Load the 16-bit immediate operand a16 into the program counter (PC).
        a16 specifies the address of the subsequently executed instruction.
      </p>
      <p>
        The second byte of the object code (immediately following the opcode)
        corresponds to the lower-order byte of a16 (bits 0-7), and the third
        byte of the object code corresponds to the higher-order byte (bits 8-15).
      </p>
    </>
  );

  return instruction;
};

export default generate_JP_a16; // eslint-disable-line camelcase

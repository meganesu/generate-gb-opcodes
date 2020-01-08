import React from 'react';
import registerPairBinaryCodes from './constants';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_DEC_r16 = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(registerPairBinaryCodes)
    .forEach(([registerPair, registerPairBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `DEC ${registerPair}`;
      instruction.type = instructionTypes.SIXTEEN_BIT_ARITHMETIC_OPERATION;
      instruction.flags = {};
      instruction.cycles = '2';
      instruction.bytes = 1;

      const opCodeInBinary = `00${registerPairBinaryCode}1011`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instruction.description = (
        <p>
          {`Decrement the contents of register pair ${registerPair} by 1.`}
        </p>
      );

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_DEC_r16; // eslint-disable-line camelcase

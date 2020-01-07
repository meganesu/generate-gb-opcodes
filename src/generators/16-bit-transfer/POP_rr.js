import React from 'react';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

import { instructionTypes } from '../constants';

const registerPairBinaryCodes = {
  BC: '00',
  DE: '01',
  HL: '10',
  AF: '11',
};

const generate_POP_rr = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(registerPairBinaryCodes)
    .forEach(([registerPair, registerPairBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `POP ${registerPair}`;
      instruction.type = instructionTypes.SIXTEEN_BIT_TRANSFER;
      instruction.flags = {};
      instruction.cycles = '3';
      instruction.bytes = 1;

      const opCodeInBinary = `11${registerPairBinaryCode}0001`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instruction.description = (
        <>
          <p>
            {
              'Pop the contents from the memory stack into register pair into'
              + ` register pair ${registerPair} by doing the following:`
            }
          </p>
          <ol>
            <li>
              {
                'Load the contents of memory specified by stack pointer SP into'
                + ` the lower portion of ${registerPair}.`
              }
            </li>
            <li>
              {
                `Add 1 to SP and load the contents from the new memory location into the upper portion of ${registerPair}.`
              }
            </li>
            <li>By the end, SP should be 2 more than its initial value.</li>
          </ol>
        </>
      );

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_POP_rr; // eslint-disable-line camelcase

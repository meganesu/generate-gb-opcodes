import React from 'react';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

import { instructionTypes } from '../constants';

const registerPairBinaryCodes = {
  BC: '00',
  DE: '01',
  HL: '10',
  AF: '11',
};

const generate_PUSH_rr = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(registerPairBinaryCodes)
    .forEach(([registerPair, registerPairBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `PUSH ${registerPair}`;
      instruction.type = instructionTypes.SIXTEEN_BIT_TRANSFER;
      instruction.flags = {};
      instruction.cycles = '4';
      instruction.bytes = 1;

      const opCodeInBinary = `11${registerPairBinaryCode}0101`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instruction.description = (
        <>
          <p>
            {`Push the contents of register pair ${registerPair} onto the memory stack by doing the following:`}
          </p>
          <ol>
            <li>
              {
                'Subtract 1 from the stack pointer SP, and put the contents of'
                + ` the higher portion of register pair ${registerPair} on the stack.`
              }
            </li>
            <li>
              {
                `Subtract 2 from SP, and put the lower portion of register pair ${registerPair} on the stack.`
              }
            </li>
            <li>Decrement SP by 2.</li>
          </ol>
        </>
      );

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_PUSH_rr; // eslint-disable-line camelcase

import React from 'react';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

import { instructionTypes, registerBinaryCodes } from '../constants';

const generate_LD_r_from_value_at_HL = () => { // eslint-disable-line camelcase
  const instructions = [];

  Object.entries(registerBinaryCodes)
    .forEach(([register, registerBinaryCode]) => {
      const instruction = {};

      instruction.mnemonic = `LD ${register}, (HL)`;
      instruction.type = instructionTypes.EIGHT_BIT_TRANSFER_AND_IO;
      instruction.flags = {};
      instruction.cycles = '2';
      instruction.bytes = 1;

      const opCodeInBinary = `01${registerBinaryCode}110`;
      instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

      instruction.description = (
        <p>
          {`Load 8-bit contents of memory specified by register pair HL into register ${register}.`}
        </p>
      );

      instructions.push(instruction);
    });

  return instructions;
};

export default generate_LD_r_from_value_at_HL; // eslint-disable-line camelcase

import React from 'react';

export const listMemoryFromFF00toFFFF = (
  <ul>
    <li>0xFF00-0xFF7F: Port/Mode registers, control register, sound register</li>
    <li>0xFF80-0xFFFE: Working & Stack RAM (127 bytes)</li>
    <li>0xFFFF: Interrupt Enable Register</li>
  </ul>
);

export const memoryAtA8Disclaimer = (
  <p>
    {
      'Note: Should specify a 16-bit address in the mnemonic portion for a8,'
      + ' although the immediate operand only has the lower-order 8 bits.'
    }
  </p>
);

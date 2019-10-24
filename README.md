# Generate Game Boy CPU Op Codes

[![Build Status](https://travis-ci.com/meganesu/generate-gb-op-codes.svg?branch=master)](https://travis-ci.com/meganesu/generate-gb-op-codes)

This is a bit of a side project that came out of my attempt to make a Game Boy emulator. I was trying to make a table of op codes for the Game Boy CPU (similar to the one on [pastraiser](http://www.pastraiser.com/cpu/gameboy/gameboy_opcodes.html)), but doing it by hand was quite tedious. So this project is an attempt to dynamically create a similar table!

## Code Key

* `r` - 8-bit register (e.g. A)
* `rr` - 16-bit register pair (e.g. HL)
* `d8` - 8-bit immediate data value
* `d16` - 16-bit immediate data value
* `a8` - 8-bit immediate value specifying an address in the range 0xFF00 - 0xFFFF
* `a16` - 16-bit immediate address value
* `s8` - 8-bit signed immediate data value

* Some conditional jump instructions take a different number of cycles depending on whether or not the specified condition is true (e.g., `JP NZ, a16`).

## Credits

* [Gameboy Development Manual v1.1](https://archive.org/details/GameBoyProgManVer1.1) - I used this to create the generator functions for the different permutations of each mnemonic.
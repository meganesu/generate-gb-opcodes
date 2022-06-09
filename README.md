# Generate Game Boy CPU Opcodes

[![Build Status](https://travis-ci.com/meganesu/generate-gb-opcodes.svg?branch=master)](https://travis-ci.com/meganesu/generate-gb-opcodes)

This is a side project that came out of my attempt to make a Game Boy emulator. I was trying to make a table of opcodes for the Game Boy CPU (similar to the one on [pastraiser](http://www.pastraiser.com/cpu/gameboy/gameboy_opcodes.html)), but doing it by hand was quite tedious. So this project dynamically creates a similar table!

[![Support me on Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/K3K1CRQWE)

## Code Key

* `r` - 8-bit register (e.g. A)
* `rr` - 16-bit register pair (e.g. HL)
* `d8` - 8-bit immediate data value
* `d16` - 16-bit immediate data value
* `a8` - 8-bit immediate value specifying an address in the range 0xFF00 - 0xFFFF
* `a16` - 16-bit immediate address value
* `s8` - 8-bit signed immediate data value

**Note:** Some conditional jump instructions take a different number of cycles depending on whether or not the specified condition is true (e.g., `JP NZ, a16`).

## Credits

### Game Boy Resources

* [Gameboy Development Manual v1.1](https://archive.org/details/GameBoyProgManVer1.1) - I used this to create the generator functions for the different permutations of each mnemonic.
* [Gameboy CPU (LR35902) instruction set](http://www.pastraiser.com/cpu/gameboy/gameboy_opcodes.html) - This is the original site that inspired this project.

### Things That Helped Me Build This Project

* [How to create an Opt-Out link for Google Analytics](https://webgilde.com/en/analytics-opt-out/)

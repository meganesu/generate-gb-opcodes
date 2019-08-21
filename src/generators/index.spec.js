import { instructionGenerators, generateAllInstructions } from '.';

describe('instructionGenerators', () => {
  it('contains an array of functions', () => {
    expect(instructionGenerators).toBeInstanceOf(Array);

    instructionGenerators.forEach(generator => {
      expect(generator).toBeInstanceOf(Function);
    });
  });
});

describe('generateAllInstructions', () => {
  let instructions;

  beforeAll(() => {
    instructions = generateAllInstructions();
  });

  it('returns an array of instruction objects', () => {
    expect(instructions).toBeInstanceOf(Array);

    instructions.forEach(instruction => {
      expect(instruction).toBeInstanceOf(Object);
    });
  });

  it('builds each instruction object with the correct structure', () => {
    instructions.forEach(instruction => {
      expect(typeof instruction.mnemonic).toBe('string');
      expect(instruction.flags).toBeInstanceOf(Object);
      expect(instruction.cycles).toBeGreaterThan(0);
      expect(instruction.opCode).toMatch(new RegExp('^[A-F\\d]*$', 'g'));
    });
  });
});
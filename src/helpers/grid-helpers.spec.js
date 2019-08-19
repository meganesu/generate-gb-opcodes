import { createInitialOpCodesGrid, setCellForOpCode } from './grid-helpers';

describe('Grid helpers', () => {
  describe('createInitialOpCodesGrid', () => {
    it('returns a 16x16 grid', () => {
      const result = createInitialOpCodesGrid();

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toEqual(16);

      result.forEach(row => {
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toEqual(16);
      });
    });
  });

  describe('setCellForOpCode', () => {
    let grid;
    beforeEach(() => {
      grid = createInitialOpCodesGrid();
    });

    it('sets the correct cell in the grid based on the op code passed in', () => {
      const instruction = {
        opCode: '8A',
        mnemonic: 'fake',
        flags: {},
        cycles: 1,
      }
      setCellForOpCode(instruction.opCode, instruction, grid);

      expect(grid[8][10]).toEqual(instruction);
    });

    describe('when trying to overwrite a cell with existing contents', () => {
      const instruction = {
        opCode: '8A',
        mnemonic: 'fake',
        flags: {},
        cycles: 2,
      };
      let consoleSpy;

      beforeEach(() => {
        consoleSpy = jest.spyOn(console, "error").mockImplementation();
        setCellForOpCode(instruction.opCode, instruction, grid);
        setCellForOpCode(instruction.opCode, {}, grid);
      });

      afterEach(() => {
        consoleSpy.mockRestore();
      });

      it('does not replace the existing contents of the cell', () => {
        expect(grid[8][10]).toEqual(instruction);
      });

      it('outputs an error message', () => {
        expect(console.error).toBeCalled();
      });
    });
  });
});
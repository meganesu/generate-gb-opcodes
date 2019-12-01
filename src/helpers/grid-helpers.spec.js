import { createInitialOpCodesGrid, setCellForOpCode } from './grid-helpers';

describe('Grid helpers', () => {
  describe('createInitialOpCodesGrid', () => {
    it('returns a 16x16 grid', () => {
      const result = createInitialOpCodesGrid();

      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(16);

      result.forEach(() => {
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(16);
      });
    });
  });

  describe('setCellForOpCode', () => {
    let grids;
    beforeEach(() => {
      grids = [];
      grids.push(createInitialOpCodesGrid());
      grids.push(createInitialOpCodesGrid());
    });

    describe('when an 8-bit op code is passed in', () => {
      it('sets the correct cell in the first grid based on the op code value', () => {
        const instruction = {
          opCode: '8A',
          mnemonic: 'fake',
          flags: {},
          cycles: 1,
        };
        setCellForOpCode(instruction.opCode, instruction, grids);

        expect(grids[0][8][10]).toEqual(instruction);
      });
    });

    describe('when a 16-bit op code starting with 0xCB is passed in', () => {
      it('sets the correct cell in the second grid based on the op code value', () => {
        const instruction = {
          opCode: 'CB8A',
          mnemonic: 'fake',
          flags: {},
          cycles: 1,
        };
        setCellForOpCode(instruction.opCode, instruction, grids);

        expect(grids[1][8][10]).toEqual(instruction);
      });
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
        consoleSpy = jest.spyOn(console, 'error').mockImplementation();
        setCellForOpCode(instruction.opCode, instruction, grids);
        setCellForOpCode(instruction.opCode, {}, grids);
      });

      afterEach(() => {
        consoleSpy.mockRestore();
      });

      it('does not replace the existing contents of the cell', () => {
        expect(grids[0][8][10]).toEqual(instruction);
      });

      it('outputs an error message', () => {
        /* eslint-disable-next-line no-console */
        expect(console.error).toBeCalled();
      });
    });
  });
});

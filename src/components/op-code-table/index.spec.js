import React from 'react';
import { mount } from 'enzyme';
import OpCodeTable from '.';
import InstructionCell from '../instruction-cell';

describe('OpCodeTable', () => {
  let component;
  let grid;

  const instructions = [
    {
      mnemonic: 'TEST1',
      type: 'test-type',
      flags: {},
      cycles: '1',
    },
    {
      mnemonic: 'TEST2',
      type: 'test-type',
      flags: {},
      cycles: '1',
    },
    {
      mnemonic: 'TEST3',
      type: 'test-type',
      flags: {},
      cycles: '1',
    },
  ];

  const setActiveInstructionStub = jest.fn();

  beforeAll(() => {
    grid = new Array(16);
    for (let i = 0; i < grid.length; i += 1) {
      grid[i] = new Array(16);
      for (let j = 0; j < grid[i].length; j += 1) {
        grid[i][j] = '';
      }
    }

    /* eslint-disable prefer-destructuring */
    grid[3][8] = instructions[0];
    grid[4][5] = instructions[1];
    grid[6][8] = instructions[2];
    /* eslint-enable prefer-destructuring */

    component = mount(
      <OpCodeTable
        opCodesGrid={grid}
        caption="This is a fake caption"
        setActiveInstruction={setActiveInstructionStub}
      />,
    );
  });

  it('mounts', () => {
    expect(component).toBeDefined();
  });
  it('contains an HTML table', () => {
    expect(component.find('table')).toHaveLength(1);
  });
  it('renders a table caption for accessibility', () => {
    expect(component.find('caption')).toHaveLength(1);
  });
  it('renders the right number of cells in the table', () => {
    expect(component.find('td.instruction')).toHaveLength(16 * 16);
  });
  it('renders the right number of InstructionCell components', () => {
    expect(component.find(InstructionCell)).toHaveLength(instructions.length);
  });
  it('passes the setActiveInstruction prop down to InstructionCell components', () => {
    component.find(InstructionCell).forEach((instructionCell) => {
      expect(instructionCell.prop('setActiveInstruction')).toBeDefined();
      expect(instructionCell.prop('setActiveInstruction')).toEqual(component.prop('setActiveInstruction'));
    });
  });
});

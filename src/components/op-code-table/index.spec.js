import OpCodeTable from '.';
import InstructionCell from '../instruction-cell';
import { mount } from 'enzyme';

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
  ]

  beforeAll(() => {
    grid = new Array(16);
    for (let i = 0; i < grid.length; i++) {
      grid[i] = new Array(16);
      for (let j = 0; j < grid[i].length; j++) {
        grid[i][j] = '';
      }
    }

    grid[3][8] = instructions[0];
    grid[4][5] = instructions[1];
    grid[6][8] = instructions[2];

    component = mount(<OpCodeTable opCodesGrid={grid} />);
  });

  it('mounts', () => {
    expect(component).toBeDefined();
  });
  it('contains an HTML table', () => {
    expect(component.find('table')).toHaveLength(1);
  });
  it('renders the right number of cells in the table', () => {
    expect(component.find('td.instruction')).toHaveLength(16*16);
  });
  it('renders the right number of InstructionCell components', () => {
    expect(component.find(InstructionCell)).toHaveLength(instructions.length);
  })
});

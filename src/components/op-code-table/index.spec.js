import OpCodeTable from '.';
import { mount } from 'enzyme';

describe('OpCodeTable', () => {
  let component;
  let grid;

  beforeAll(() => {
    grid = new Array(16);
    for (let i = 0; i < grid.length; i++) {
      grid[i] = new Array(16);
      for (let j = 0; j < grid[i].length; j++) {
        grid[i][j] = '';
      }
    }

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
});

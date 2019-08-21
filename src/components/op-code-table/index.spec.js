import OpCodeTable from '.';
import { mount } from 'enzyme';

describe('OpCodeTable', () => {
  let component;

  beforeAll(() => {
    component = mount(<OpCodeTable />);
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

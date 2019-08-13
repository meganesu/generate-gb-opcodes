import OpCodeTable from '.';
import { mount } from 'enzyme';

describe('OpCodeTable', () => {
  const component = mount(<OpCodeTable />);

  it('mounts', () => {
    expect(component).toBeDefined();
  });
  it('contains an HTML table', () => {
    expect(component.find('table')).toHaveLength(1);
  })
});
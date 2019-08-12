import OpCodeTable from '.';
import { mount } from 'enzyme';

describe('OpCodeTable', () => {
  it('mounts', () => {
    const component = mount(<OpCodeTable />);
    expect(component).toBeTruthy();
  });
});
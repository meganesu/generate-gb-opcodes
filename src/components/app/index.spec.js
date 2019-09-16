import App from '.';
import { mount } from 'enzyme';

describe('App', () => {
  let component;

  beforeAll(() => {
    component = mount(<App />);
  })

  it('mounts', () => {
    expect(component).toBeDefined();
  });

  xit('initializes two empty grids', () => {
  });

  xit('calls generateAllInstructions', () => {
  });

  xit('calls setCellForOpCode for each instruction', () => {
  });

  xit('renders one OpCodeTable for each grid', () => {
  });
});
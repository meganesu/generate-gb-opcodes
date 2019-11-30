import { mount } from 'enzyme';
import DetailsSidebar from '.';

describe('DetailsSidebar', () => {
  let component;
  let toggleSidebarStub = jest.fn();
  
  beforeAll(() => {
    component = mount(<DetailsSidebar toggleSidebar={toggleSidebarStub} />);
  });

  it('has a close sidebar button', () => {
    expect(component.find('button').length).toEqual(1);
  });

  describe('when the close button is clicked', () => {
    beforeAll(() => {
      component.find('button').simulate('click');
    })
    it.todo('calls hideSidebar');
  });
});
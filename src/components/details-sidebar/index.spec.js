import { mount } from 'enzyme';
import DetailsSidebar from '.';

describe('DetailsSidebar', () => {
  let component;
  let hideSidebarStub = jest.fn();
  
  beforeAll(() => {
    component = mount(<DetailsSidebar hideSidebar={hideSidebarStub} />);
  });

  it('has a close sidebar button', () => {
    expect(component.find('button').length).toEqual(1);
  });

  describe('when the close button is clicked', () => {
    beforeAll(() => {
      component.find('button').simulate('click');
    })
    it('calls hideSidebar from props', () => {
      expect(hideSidebarStub.mock.calls.length).toEqual(1);
    });
  });
});

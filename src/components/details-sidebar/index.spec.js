import React from 'react';
import { mount } from 'enzyme';
import DetailsSidebar from '.';

describe('DetailsSidebar', () => {
  let component;
  const hideSidebarStub = jest.fn();

  const activeInstruction = {
    mnemonic: 'TEST MNEMONIC',
    type: 'test-instruction-type',
    flags: {
      CY: 'CY',
      H: 'H',
      N: 'N',
      Z: 'Z',
    },
    cycles: '4',
    bytes: 3,
  };

  beforeAll(() => {
    component = mount(
      <DetailsSidebar
        activeInstruction={activeInstruction}
        hideSidebar={hideSidebarStub}
      />,
    );
  });

  it('has a close sidebar button', () => {
    expect(component.find('button')).toHaveLength(1);
  });

  describe('when the close button is clicked', () => {
    beforeAll(() => {
      component.find('button').simulate('click');
    });
    it('calls hideSidebar from props', () => {
      expect(hideSidebarStub.mock.calls).toHaveLength(1);
    });
  });
});

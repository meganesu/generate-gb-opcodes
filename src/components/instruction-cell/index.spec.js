import React from 'react';
import { mount } from 'enzyme';
import InstructionCell from '.';

describe('InstructionCell', () => {
  let component;

  const instruction = {
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

  const clickStub = jest.fn();

  beforeAll(() => {
    component = mount(
      <table>
        <tbody>
          <tr>
            <InstructionCell
              instruction={instruction}
              setActiveInstruction={clickStub}
            />
          </tr>
        </tbody>
      </table>,
    );
  });
  it('renders a td element with the instruction class', () => {
    expect(component.find('td')).toHaveLength(1);
    expect(component.find('.instruction')).toHaveLength(1);
  });

  it('renders the instruction mnemonic', () => {
    expect(component.find('.mnemonic')).toHaveLength(1);
    expect(component.find('.mnemonic').text()).toEqual(instruction.mnemonic);
  });

  it('adds the instruction type as a class name', () => {
    expect(component.find(`.${instruction.type}`)).toHaveLength(1);
  });

  it('renders the number of bytes', () => {
    expect(component.find('.bytes')).toHaveLength(1);
  });

  it('renders the number of cycles', () => {
    expect(component.find('.cycles')).toHaveLength(1);
  });

  it('renders the instruction flags', () => {
    expect(component.find('.flags')).toHaveLength(1);
  });

  describe('when clicked', () => {
    beforeAll(() => {
      component.find('button').simulate('click');
    });
    it('calls the click handler from props with correct arguments', () => {
      expect(clickStub.mock.calls).toHaveLength(1);

      const firstArg = clickStub.mock.calls[0][0];
      expect(firstArg).toEqual(instruction);

      const secondArg = clickStub.mock.calls[0][1];
      expect(secondArg).toBeDefined();
    });
  });

  describe('when CY or H flags are "8-bit" or "16-bit"', () => {
    const instructionWithFlagsWithBitValues = {
      mnemonic: 'TEST MNEMONIC',
      type: 'test-instruction-type',
      flags: {
        CY: '16-bit',
        H: '8-bit',
        N: 'N',
        Z: 'Z',
      },
      cycles: '4',
      bytes: 3,
    };

    it('renders flag name instead of "*-bit" string', () => {
      const componentWithFlagsWithBitValues = mount(
        <table>
          <tbody>
            <tr>
              <InstructionCell
                instruction={instructionWithFlagsWithBitValues}
                setActiveInstruction={clickStub}
              />
            </tr>
          </tbody>
        </table>,
      );

      expect(componentWithFlagsWithBitValues.find('.flags').text()).toContain('CY');
      expect(componentWithFlagsWithBitValues.find('.flags').text()).toContain('H');
    });
  });
});

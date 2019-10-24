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
  }

  beforeAll(() => {
    component = mount(
      <table>
        <tbody>
          <tr>
            <InstructionCell instruction={instruction} />
          </tr>
        </tbody>
      </table>
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
  })

  it.todo('adds a visually hidden instruction type (for screen readers)')

  it.todo('renders the number of bytes');

  it.todo('renders the number of cycles');

  it.todo('renders the instruction flags');
});
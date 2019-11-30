import App from '.';
import OpCodeTable from '../op-code-table';
import DetailsSidebar from '../details-sidebar';
import { mount } from 'enzyme';
import * as generators from '../../generators';
import * as gridHelpers from '../../helpers/grid-helpers';

describe('App', () => {
  let component;
  let generateAllInstructionsSpy;
  let createInitialOpCodesGridSpy;
  let setCellForOpCodeSpy;

  beforeAll(() => {
    generateAllInstructionsSpy = jest.spyOn(generators, 'generateAllInstructions');
    createInitialOpCodesGridSpy = jest.spyOn(gridHelpers, 'createInitialOpCodesGrid');
    setCellForOpCodeSpy = jest.spyOn(gridHelpers, 'setCellForOpCode');

    component = mount(<App />);
  });

  it('mounts', () => {
    expect(component).toBeDefined();
  });

  it('initializes two empty grids', () => {
    expect(createInitialOpCodesGridSpy).toHaveBeenCalledTimes(2);
  });

  it('calls generateAllInstructions', () => {
    expect(generateAllInstructionsSpy).toHaveBeenCalledTimes(1);
  });

  it('calls setCellForOpCode for each instruction', () => {
    const numInstructions = generateAllInstructionsSpy.mock.results[0].value.length;

    expect(setCellForOpCodeSpy).toHaveBeenCalledTimes(numInstructions);
  });

  it('renders one OpCodeTable for each grid', () => {
    expect(component.find(OpCodeTable)).toHaveLength(2);
  });

  it('does not render DetailsSidebar', () => {
    expect(component.find(DetailsSidebar)).toHaveLength(0);
  })

  describe('when InstructionCell in OpCodeTable is clicked', () => {
    let instructionClicked;

    beforeAll(() => {
      const instructionCells = component.find('InstructionCell');
      expect(instructionCells.length).toBeGreaterThan(1);
      instructionCells.first().find('button').simulate('click');
      instructionClicked = instructionCells.first().prop('instruction');
    });

    it('renders the DetailsSidebar', () => {
      expect(component.find(DetailsSidebar)).toHaveLength(1);
    });
    it('updates the activeInstruction passed to the DetailsSidebar', () => {
      expect(component.find(DetailsSidebar).prop('activeInstruction')).toEqual(instructionClicked);
    });

    describe('when close sidebar button is clicked', () => {
      beforeAll(() => {
        expect(component.find('DetailsSidebar')).toHaveLength(1);
        component.find('DetailsSidebar button').simulate('click');
      });
      it('hides the DetailsSidebar', () => {
        expect(component.find('DetailsSidebar')).toHaveLength(0);
      });
    });
  })
});

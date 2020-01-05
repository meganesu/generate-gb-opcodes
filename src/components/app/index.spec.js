import React from 'react';
import { mount } from 'enzyme';
import App from '.';
import OpCodeTable from '../op-code-table';
import DetailsSidebar from '../details-sidebar';
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

  it('renders DetailsSidebar with correct props', () => {
    const detailsSidebar = component.find(DetailsSidebar);
    expect(detailsSidebar).toHaveLength(1);
    expect(detailsSidebar.prop('isHidden')).toEqual(true);
    expect(detailsSidebar.prop('sidebarRef')).toBeDefined();
  });

  describe('when InstructionCell in OpCodeTable is clicked', () => {
    let instructionClicked;

    beforeAll(() => {
      const instructionCells = component.find('InstructionCell');
      instructionCells.first().find('button').simulate('click');
      instructionClicked = instructionCells.first().prop('instruction');
    });

    it('shows the DetailsSidebar', () => {
      expect(component.find(DetailsSidebar).prop('isHidden')).toEqual(false);
    });

    it('updates the activeInstruction passed to the DetailsSidebar', () => {
      expect(component.find(DetailsSidebar).prop('activeInstruction')).toEqual(instructionClicked);
    });

    it.todo('moves focus to the sidebarRef');

    describe('when close sidebar button is clicked', () => {
      beforeAll(() => {
        component.find('DetailsSidebar button').simulate('click');
      });
      it('hides the DetailsSidebar', () => {
        expect(component.find('DetailsSidebar').prop('isHidden')).toEqual(true);
      });
    });
  });
});

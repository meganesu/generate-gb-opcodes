import App from '.';
import OpCodeTable from '../op-code-table';
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
    expect(component.find(OpCodeTable).length).toEqual(2);
  });
});
import {filterData, sortData, computeState } from '../src/data.js';
import data from '../src/data/rickandmorty/rickandmorty.js';

describe('data.filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns 3 vampires `filterData`', () => {
    const totalVampires = 3;
    const callFilterData = filterData("Vampire", data.results);
    expect(callFilterData.length).toBe(totalVampires);
  });
  it('first element id is 66', () => {
    const expectedId = 66;
    const callFilterData = filterData("Vampire", data.results);
    expect(callFilterData[0].id).toBe(expectedId);
  })
});

describe('data.sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

});

describe('data.computeState', () => {
  it('is a function', () => {
    expect(typeof computeState).toBe('function');
  });

  
});
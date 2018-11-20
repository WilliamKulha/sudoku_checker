import { isValidSudoku } from './../src/module.js';
import { isValidCol } from './../src/module.js';
import { isValidRow } from './../src/module.js';
import { isValidGrids } from './../src/module.js';

describe('Sudoku Checker', function() {

  it('should return true if all rows contain the numbers 1-9', function() {
    let rows = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1,2, 3, 4, 5, 6, 7, 8, 9]
    ];
    expect(isValidRow(rows)).toEqual(true);
  });

  it(`should return false if all rows don't contain the numbers 1-9`, function() {
    let badRows = [
      [1, 2, 3, 4, 5, 5, 7, 8, 9],
      [1, 2, 3, 4, 5, 5, 7, 8, 9]
    ];
    expect(isValidRow(badRows)).toEqual(false);
  });

  it(`should return true if all columns contain the numbers 1-9`, function() {
    let columns = [
      [1, 2],
      [2, 1],
      [3, 3],
      [4, 4],
      [5, 5],
      [6, 6],
      [7, 7],
      [8, 8],
      [9, 9]
    ];
    expect(isValidCol(columns)).toEqual(true);
  });

  it(`should return false if all columns don't contain the numbers 1-9`, function() {
    let badColumns = [
      [1, 2],
      [2, 1],
      [2, 3],
      [4, 4],
      [5, 5],
      [6, 6],
      [7, 7],
      [8, 8],
      [9, 9]
    ];
    expect(isValidCol(badColumns)).toEqual(false);
  });

  it(`should return true if a complete sudoku array resolves to true with all three of: isValidCol, isValidRow, isValidGrids`, function () {
    let completeArray = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2], 
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],      
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],      
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];
    expect(isValidSudoku(completeArray)).toEqual(true);
  });

  it(`should return false if a complete sudoku array resolves false with either isValidCol OR isValidRow OR isValidGrids`, function () {
    let badCompleteArray = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [9, 1, 2, 3, 4, 5, 6, 7, 8],
      [8, 9, 1, 2, 3, 4, 5, 6, 7],
      [7, 8, 9, 1, 2, 3, 4, 5, 6],
      [6, 7, 8, 9, 1, 2, 3, 4, 5],
      [5, 6, 7, 8, 9, 1, 2, 3, 4],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [3, 4, 5, 6, 7, 8, 9, 1, 2],
      [2, 1, 4, 5, 6, 7, 8, 9, 1]
    ];
    expect(isValidSudoku(badCompleteArray)).toEqual(false);
  });

  it(`return true if all 3x3 grids contain no repeats of numbers and are valid sudoku solutions`, function() {
    let exampleSudoku = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2], 
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],      
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],      
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];
    expect(isValidGrids(exampleSudoku)).toEqual(true);
  });

  it(`should return false if there are repeat numbers in any of the 3x3 grids`, function() {
    let badExampleSudoku = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [9, 1, 2, 3, 4, 5, 6, 7, 8],
      [8, 9, 1, 2, 3, 4, 5, 6, 7],
      [7, 8, 9, 1, 2, 3, 4, 5, 6],
      [6, 7, 8, 9, 1, 2, 3, 4, 5],
      [5, 6, 7, 8, 9, 1, 2, 3, 4],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [3, 4, 5, 6, 7, 8, 9, 1, 2],
      [2, 3, 4, 5, 6, 7, 8, 9, 1]
    ];
    expect(isValidGrids(badExampleSudoku)).toEqual(false);
  });

});
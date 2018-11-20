import { isValidRow } from './../src/module.js';
import { isValidCol } from './../src/module.js';
describe('seppuku', function() {

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

});
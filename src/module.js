export const isValidRow = function(sudokuArray) {
  let isHeAGoodBoi = true;
  sudokuArray.forEach(function(row) {
    for (let i = 1; i < 10; i++) {
      if(!row.includes(i)) {
        isHeAGoodBoi = false;
      }
    }
  });  
  return isHeAGoodBoi;
};

export const isValidCol = function(sudokuArray) {
  let isHeAGoodBoi = true;
  const getArrayCol = (arr, n) => arr.map(x => x[n]);
  let columns = [];
  for (let i = 0; i < sudokuArray[0].length; i ++) {
    columns.push(getArrayCol(sudokuArray, i));
  }
  columns.forEach(function(col) {
    for (let i = 1; i < 10; i++) {
      if(!col.includes(i)) {
        isHeAGoodBoi = false;
      }
    }
  });
  return isHeAGoodBoi;
};

export const isValidGrids = completeSudokuArray => {
  let isHeAGoodBoi = true;

  let firstThree = completeSudokuArray.slice(0, 3);

  let secondThree = completeSudokuArray.slice(3, 6);

  let thirdThree = completeSudokuArray.slice(6, 9);

  const getArrayCol = (arr, n) => arr.map(x => x[n]);

  let boxOne = getArrayCol(firstThree, 0).concat(getArrayCol(firstThree, 1), getArrayCol(firstThree, 2));
  let boxTwo = getArrayCol(firstThree, 3).concat(getArrayCol(firstThree, 4), getArrayCol(firstThree, 5));
  let boxThree = getArrayCol(firstThree, 6).concat(getArrayCol(firstThree, 7), getArrayCol(firstThree, 8));
  let boxFour = getArrayCol(secondThree, 0).concat(getArrayCol(secondThree, 1), getArrayCol(secondThree, 2));
  let boxFive = getArrayCol(secondThree, 3).concat(getArrayCol(secondThree, 4), getArrayCol(secondThree, 5));
  let boxSix = getArrayCol(secondThree, 6).concat(getArrayCol(secondThree, 7), getArrayCol(secondThree, 8));
  let boxSeven = getArrayCol(thirdThree, 0).concat(getArrayCol(thirdThree, 1), getArrayCol(thirdThree, 2));
  let boxEight = getArrayCol(thirdThree, 3).concat(getArrayCol(thirdThree, 4), getArrayCol(thirdThree, 5));
  let boxNine = getArrayCol(thirdThree, 6).concat(getArrayCol(thirdThree, 7), getArrayCol(thirdThree, 8));

  let grids = [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine];

  grids.forEach(function(grid) {
    for (let i = 1; i < 10; i++) {
      if(!grid.includes(i)) {
        isHeAGoodBoi = false;
      }
    }
  });
  return isHeAGoodBoi;
};

export const isValidSudoku = completeSudokuArray => {
  if (isValidCol(completeSudokuArray) && isValidRow(completeSudokuArray) === true) {
    return true;
  } else {
    return false;
  }
}


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

export const isValidSudoku = completeSudokuArray => {
  if (isValidCol(completeSudokuArray) && isValidRow(completeSudokuArray) === true) {
    return true;
  } else {
    return false;
  }
}


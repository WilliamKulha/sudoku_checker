export const isValidRow = function(arr) {
  let isHeAGoodBoi = true;
  arr.forEach(function(row) {
    for (let i = 1; i < 10; i++) {
      if(!row.includes(i)) {
        isHeAGoodBoi = false;
      }
    }
  });  
  return isHeAGoodBoi;
};

export const isValidCol = function(arr) {
  console.log(arr);
}

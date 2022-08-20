
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let newMatrix = [];
  if (matrix.length == 0 || matrix == []) {return([])} else {
  for (let i = 0; i < matrix.length; i++) {
    if (i%2!==0) {newMatrix[i]=matrix[i].reverse();}
    else {newMatrix[i]=matrix[i];}
  }
  let array = newMatrix.map(arr => arr.join(',')).join(',').split(',');
  let res = array.map(arr=>Number(arr));
  return(res);
  }
}

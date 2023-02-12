
// You should implement your task here.

module.exports = function towelSort (matrix) {
let res = [];
let t = 0;
for (let i = 0; i < matrix.length; i++) {
  if (i % 2 !== 0) {
  for (let j = matrix[i].length - 1; j >= 0; j--) {
    res[t] = matrix[i][j];
    t++;
  } } else
  {
    for (let k = 0; k < matrix[i].length; k++) {
    res[t] = matrix[i][k]; 
      t++;
  }
  }
}
}
return res;
}

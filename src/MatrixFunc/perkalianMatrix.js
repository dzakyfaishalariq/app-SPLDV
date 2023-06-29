const MatrixKali = (matrix1, matrix2) => {
  let result = [];
  let temp = [];
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrix1[0].length; k++) {
        sum += matrix1[i][k] * matrix2[k][j];
      }
      temp.push(sum);
    }
    result.push(temp);
    temp = [];
  }
  return result;
};

export default MatrixKali;

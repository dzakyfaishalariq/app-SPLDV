const MatrixInvers = (matrix) => {
  const n = matrix.length;
  const matrix2 = [];
  for (let i = 0; i < n; i++) {
    matrix2[i] = [];
    for (let j = 0; j < n; j++) {
      matrix2[i][j] = matrix[i][j];
    }
  }
  const matrix3 = [];
  for (let i = 0; i < n; i++) {
    matrix3[i] = [];
    for (let j = 0; j < n; j++) {
      matrix3[i][j] = 0;
    }
  }
  for (let i = 0; i < n; i++) {
    matrix3[i][i] = 1;
  }
  for (let i = 0; i < n; i++) {
    let temp = matrix2[i][i];
    for (let j = 0; j < n; j++) {
      matrix2[i][j] /= temp;
      matrix3[i][j] /= temp;
    }
    for (let j = 0; j < n; j++) {
      if (i != j) {
        temp = matrix2[j][i];
        for (let k = 0; k < n; k++) {
          matrix2[j][k] -= matrix2[i][k] * temp;
          matrix3[j][k] -= matrix3[i][k] * temp;
        }
      }
    }
  }
  return matrix3;
};

export default MatrixInvers;

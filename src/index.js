
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    let count = 0;
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 == 0) {
                for (let j = 0; j < matrix[i].length; j++) {
                    result[count] = matrix[i][j];
                    count++;
                }
            } else {
                for (let j = matrix[i].length - 1; j >= 0; j--) {
                    result[count] = matrix[i][j];
                    count++;
                }
            }
        }
      }

    return result;
};

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    // set the array size
    let result = [];
    for (i = 0; i < n; i++) {
        result.push([]);
    }
    let count = 1;
    let rowStart = 0;
    let rowEnd = n - 1;
    let colStart = 0;
    let colEnd = n - 1;
    while (rowStart <= rowEnd && colStart <= colEnd) {
        // filling the first row
        for (let i = colStart; i <= colEnd; i++) {
            result[rowStart][i] = count;
            count++;
        }
        rowStart++;
        //filling the last column
        for (let i = rowStart; i <= rowEnd; i++) {
            result[i][colEnd] = count;
            count++;
        }
        colEnd--;
        for (let i = colEnd; i >= colStart; i--) {
            result[rowEnd][i] = count;
            count++;
        }
        rowEnd--;
        for (let i = rowEnd; i >= rowStart; i--) {
            result[i][colStart] = count;
            count++;
        }
        colStart++;
    }
    console.log(result);
}
matrix(8)
module.exports = matrix;

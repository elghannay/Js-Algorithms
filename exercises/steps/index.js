// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'












function steps(n) {
    for (let i = 1; i <= n; i++) {
        let result = '';
        for (let j = 1; j <= i; j++) {
            result += '#';
        }
        for (let K = 1; K <= n - i; K++) {
            result += ' ';
        }
        console.log(result);
    }
}
steps(8);

function steps(n) {
    for (let row = 1; row <= n; row++) {
        let stairs = '';
        for (let column = 1; column <= n; column++) {
            if (column <= row) stairs += '#';
            else stairs += ' '
        }
        console.log(stairs);
    }
}
steps(6)
// make sure to transform the iterative solution to recursive rather than starting it from your 
// imagination
function steps(n, row = 0, stair = '') {
    if (row == n) return;
    if (stair.length == n) {
        console.log(stair);
        return steps(n, row + 1)
    }
    if (stair.length <= row) stair += '#';
    else stair += ' ';
    return steps(n, row, stair)
}

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for (let row = 1; row <= n; row++) {
        let stair = '';
        for (let space = 1; space <= n - row; space++) {
            stair += ' ';
        }
        for (let pound = 1; pound <= 2 * row - 1; pound++) {
            stair += '#';
        }
        for (let space = 1; space <= n - row; space++) {
            stair += ' ';
        }
        console.log(stair);
    }
}

function pyramid(n) {
    let midPoint = Math.floor((2 * n - 1) / 2)
    for (let row = 0; row < n; row++) {
        let level = '';
        for (let columns = 0; columns < 2 * n - 1; columns++) {
            if (midPoint - row <= columns && midPoint + row >= columns) level += '#';
            else level += ' ';
        }
        console.log(level);
    }
}
pyramid(8);
function pyramid(n, row = 0, level = '') {
    const midPoint = Math.floor((2 * n - 1) / 2);
    if (row == n) return;
    if (level.length == 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }
    if (midPoint - row <= level.length && midPoint + row >= level.length) level += '#';
    else level += ' ';
    return pyramid(n, row, level)
}

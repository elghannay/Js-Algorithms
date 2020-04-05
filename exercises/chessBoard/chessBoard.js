/*
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #

*/

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);

function strings(n) {

    let string = '';
    for (let rows = 1; rows <= n; rows++) {
        for (let columns = 1; columns <= n; columns++) {
            if (string === '') string += ' ';
            else if (string[string.length - 1] === '\n' && string[string.length - 2] === ' ') string += ' ';
            else if (string[string.length - 1] === '\n' && string[string.length - 2] === '#') string += '#';
            else if (string[string.length - 1] === ' ') string += '#';
            else if (string[string.length - 1] === '#') string += ' ';
        }
        string += '\n';
    }
    return string;
}
// make sure that the string passed is balanced
// "())))" -> return false;
// "(((()))))" -> return true;
// ")(" return false
function balanced(string) {
    return !string.split("").reduce((acc, char) => {
        if (char == '(')
            acc++;
        if (char == ')')
            acc--;
        if (acc == -1)
            return acc;
        return acc;
    }, 0)
}


let string = '()()';
console.log(balanced(string));

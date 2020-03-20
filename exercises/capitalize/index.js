// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalization(string) {
    let result = string[0].toUpperCase();
    for (let i = 1; i < string.length; i++) {
        if (string[i - 1] === ' ')
            result += string[i].toUpperCase();
        else
            result += string[i];
    }
    return result;
}

console.log(capitalizations('-+- hello     dsw workdda Re do'));

function capitalizations(string) {
    let result = [];
    for (const word of string.split(' ')) {
        if (word !== '')
            result.push(word[0].toUpperCase() + word.slice(1));
        else result.push(' ');
    }
    return result.join(' ');
}
console.log(capitalize("!hello there there is a fun"));

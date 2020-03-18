// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    //the nasty solution 
    let count = 0;
    for (const char of str) {
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'U' || char == 'I' || char == 'O' || char == 'E')
            count++
    }
    return count;
}
function vowels(str) {
    let count = 0;
    let checker = ['a', 'e', 'o', 'u', 'i']
    for (const char of str.toLowerCase()) {
        if (checker.includes(char)) count++;
    }
    return count;
}

function vowels(string) {
    const matches = string.match(/[aeoiu]/gi);
    return matches ? matches.length : 0;
}
console.log(vowels('hellO'));
module.exports = vowels;

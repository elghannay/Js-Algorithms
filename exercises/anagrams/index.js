// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let obj = {};
    let max = 0;
    let maxChar = '';
    for (let char of string) {
      obj[char] = ++obj[char] || 1; // using obj[char]++ is false in the loop you should use ++obj[char]
    }
    for (const key in obj) {
      if (obj[key] > max) {
        max = obj[key];
        maxChar = key;
      }
    }
    return maxChar;
}

module.exports = anagrams;

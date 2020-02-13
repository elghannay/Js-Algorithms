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
  let objA = {};
  let objB = {};
  let max = 0;
  let maxChar = '';
  for (let char of stringA) {
    objA[char] = ++objA[char] || 1; // using obj[char]++ is false in the loop you should use ++obj[char]
  }
  for (let char of stringB) {
    objB[char] = ++objB[char] || 1; // using obj[char]++ is false in the loop you should use ++obj[char]
  }
  if (Object.keys(objA).length == Object.keys(objB).length) {
      
  } else return false;
  return maxChar;
}

module.exports = anagrams;

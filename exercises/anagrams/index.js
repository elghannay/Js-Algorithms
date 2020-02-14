// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
// 'use strict';
function anagrams(stringA, stringB) {
  const cleanedStrA = cleanStr(stringA);
  const cleanedStrB = cleanStr(stringB);
  if (cleanedStrA !== cleanedStrB) return false;
  return true;
}
function cleanStr(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

// this one goes with it own helper function
// since in this case we will create a solution
// based on a object map and then check for each key on the first
// is it equal the second
function anagrams(stringA, stringB) {
  const aCharMap = objectMap(stringA);
  const bCharMap = objectMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length)
    return false;

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) return false;
  }
}

function objectMap(str) {
  let obj = {};
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    obj[char] = obj[char] + 1 || 1;
  }
  return obj;
}
module.exports = anagrams;

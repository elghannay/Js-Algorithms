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

function anagrams(str1, str2) {
  cString1 = str1.replace(/[^\w]/g, '').toLowerCase();
  cString2 = str2.replace(/[^\w]/g, '').toLowerCase();
  return cString1.split('').sort().join('') === cString2.split('').sort().join('')
}


function anagrams(stringA, stringB) {
  const aCharMap = objectMap(stringA);
  const bCharMap = objectMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length)
    return false;

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) return false;
  }
  return true;
}

function objectMap(str) {
  let obj = {};
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    obj[char] = obj[char] + 1 || 1;
  }
  return obj;
}
module.exports = anagrams;

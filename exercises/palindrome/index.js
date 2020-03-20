// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(string) {
  return string === string.split('').reverse().join('');
}

function palindrome(string) {
  for (let i = 0; i < string.length / 2; i++) {
      if (string[i] !== string[string.length - i - 1]) return false;
  }
  return true;
}

function palindrome(string) {
  return string === string.split('').reduce((acc, cur) => cur + acc);
}

function palindrome(string) {
  return string.split('').every((char, index) => char === string[string.length - 1 - index]);
}

console.log(palindrome('abba'));
module.exports = palindrome;

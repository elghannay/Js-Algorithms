// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function convertToObjet(str) {
  let filledObj = str.split('').reduce((object, current) => {
    if (object[current]) object[current]++;
    else object[current] = 1;
    return object;
  }, {});
}
function convertToObjet2(string) {
  let obj = {};
  for (let char of string) {
    // we can apply directly for of on string !!
    if (obj[char]) {
      ++obj[char];
    } else obj[char] = 1;
  }
}
function convertToObjet3(string) {
  let obj = {};
  let max = 0;
  let maxChar = '';
  for (let char of string) {
    obj[char] = ++obj[char] || 1; // initialization technique
  }
}

function maxChar(string) {
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
function maxNumChar(string) {
  let max = 0;
  let obj = {};
  for (const char of string) {
    obj[char] = ++obj[char] || 1;
  }
  for (const char in obj) {
    if (obj[char] > max) {
      max = obj[char];
    }
  }
  return max;
}

module.exports = maxChar;

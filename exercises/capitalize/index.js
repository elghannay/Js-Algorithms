// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
      if (string[i].toUpperCase() != string[i].toLowerCase() && i == 0) {
          result += string[0].toUpperCase();
          continue;
      }
      if (string[i] == " ") {
          if (string[i + 1].toUpperCase() != string[i + 1].toLowerCase()) {
              result += string[i];
              result += string[++i].toUpperCase();
              continue;
          }
      } result += string[i];
  }
  return result;
}

function capitalize(string) {
  let result = [];
  for (const word of string.split(' ')) {
      result.push(word[0].toUpperCase() + word.slice(1));
  }
  return result.join(' ');
}

function capitalize(string) {
  let result = string[0].toUpperCase();
  for (let i = 0; i < string.length; i++) {
      if (string[i - 1] == ' ')
          result += string[i].toUpperCase();
      result += string[i];
  }
}
console.log(capitalize("hello there there is a fun"));

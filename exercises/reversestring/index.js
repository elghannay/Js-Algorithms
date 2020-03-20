function reversal(string) {
  return string.split('').reverse().join('');
}

function reverse(str) {
  let reversed = '';
  for (let character of str) {
    // the trick is here the order in the concatenation is important
    reversed = character + reversed;
  }
  return reversed;
}

function reverse(str) {
  return str.split('').reduce(function (acc, current) {
    return acc = current + acc;
  }, '');
}
// ES6 solution
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

console.log(reverse('hellow there'));
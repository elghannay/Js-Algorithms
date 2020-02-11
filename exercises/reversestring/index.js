function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

console.log(reverse('hellow there'));
function reverse(str) {
  let reversed = '';
  for (let character of str) {
    // the trick is here the order in the concatenation is important
    reversed = character + reversed;
  }
  return reversed;
}

function reverse(str) {
  return str.split('').reduce(function(acc, current) {
    acc = current + acc;
    return acc;
  }, '');
}
// ES6 solution
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}
reverse('hello there');
module.exports = reverse;

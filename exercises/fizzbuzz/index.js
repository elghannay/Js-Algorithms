// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let index = 1; index <= n; index++) {
    if (index % 3 === 0)
      // to determine if a number is a multiple of another we need to use the modulo operator
      console.log('fizz');
    else if (index % 5 === 0) console.log('buzz');
    else if (index % 5 === 0 && n % 3 == 0) console.log('fizzbuzz');
    else console.log(n);
  }
}

module.exports = fizzBuzz;

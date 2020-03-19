// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
console.log(fibonacci(6));

// linear runtime complexity since with every number we perform an additional 
// iteration 
function fibonacci(n) {
    let second = 1;
    let next;
    let first = 0;
    if (n <= 1) return n;
    for (let i = 1; i < n; i++) {
        next = first + second;
        first = second;
        second = next;
    }
    return next;
}
// another alternate solution 
function fib(n) {
    let result = [0, 1];
    for (let i = 2; i <= n; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return result[n];// return result[result.length -1]
}
// optimizing with memoization 

function memoize(slowFn) {
    let cache = {};
    return function (...args) {
        if (cache[args]) return cache[args];
        let result = slowFn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

function slowFib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
let fib = memoize(slowFib)

console.log(fibonacci(90));

function fibonacci(n, previous = []) {
    let result;
    if (n <= 1) return n;
    if (previous[n]) return previous[n];
    result = fibonacci(n - 1, previous) + fibonacci(n - 2, previous);
    previous[n] = result;
    return result;
}

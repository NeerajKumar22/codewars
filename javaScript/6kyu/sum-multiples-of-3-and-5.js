// Yet another one-line task involving threes and fives (I know, I'm the worst),
// inspired by Sum of All the Multiples of 3 or 5, 
// in this kata you need to do exactly what the name says: 
// Return the sum of all numbers divisible by three or five up to and including n in under 
// 53 characters in JS or 64 characters in R. No other restrictions or limitations :)

// Inputs may be up to ~200m. They will always be valid, non-negative integers.

// SOLUTION BUT NOT IN 53 CHARACTERS...............

function sum(n) {
  let total = 0;
  for (let i = 3; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      total += i
    }
  }
  return total;
}

console.log(sum(10));
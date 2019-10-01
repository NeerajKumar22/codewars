// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 
// below the number passed in.

// Solution of the problem

// function solution(number) {
//   let sum = 0;
//   for (let i = 3; i < number; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       sum += i
//     }
//   }
//   return sum;
// }

// console.log(solution(100));

// for Best Practices

function solution(number) {
  number = number - 1;
  var numFive = Math.floor(number / 5);
  var numThree = Math.floor(number / 3);
  var numFifteen = Math.floor(number / 15);

  return SAS(numFive, 5, 5 * numFive) + SAS(numThree, 3, 3 * numThree) - SAS(numFifteen, 15, 15 * numFifteen);
}

// sum arithmetic sequence
// if first term and last term are given then we will write

var SAS = function (n, start, end) {
  return n * (start + end) / 2
}

console.log(solution(10));
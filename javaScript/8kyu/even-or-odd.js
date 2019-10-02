// Create a function (or write a script in Shell) that takes an integer as an argument 
// and returns "Even" for even numbers or "Odd" for odd numbers.

// Solution by simple if else

// function even_or_odd(number) {
//   if (number % 2 == 0) {
//     return "Even"
//   } else {
//     return "Odd"
//   }
// }

// Solution by ternary operator

// function even_or_odd(number) {
//   return number % 2 ? "Odd" : "Even"
// }

// or

// function even_or_odd(number) {
//   return number % 2 === 0 ? "Even" : "Odd"
// }

// or

const even_or_odd = number => number % 2 === 0 ? "Even" : "Odd"

console.log(even_or_odd(1))
console.log(even_or_odd(2))
console.log(even_or_odd(3))
console.log(even_or_odd(5))
console.log(even_or_odd(8))
console.log(even_or_odd(11));
// Number Pairs
// Write a function getLargerNumbers(a, b) that takes two arrays of numbers and returns a new array containing the larger number from each pair at the same index.

function getLargerNumbers(a, b) {
  return a.map((num, i) => Math.max(num, b[i]));
}

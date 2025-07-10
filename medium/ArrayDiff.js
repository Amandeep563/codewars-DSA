// Array Diff
// Write a function arrayDiff(a, b) that returns an array containing elements from array a that are not present in array b.

function arrayDiff(a, b) {
  return a.filter((num) => !b.includes(num));
}

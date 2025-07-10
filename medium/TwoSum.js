// Two Sum
// Write a function twoSum(numbers, target) that returns the indices of the two numbers in the array that add up to the target.
// Return the indices as an array [i, j]. Assume there is exactly one solution.

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let a = i + 1; a < numbers.length; a++) {
      if (numbers[i] + numbers[a] === target) {
        return [i, a];
      }
    }
  }
  return [];
}

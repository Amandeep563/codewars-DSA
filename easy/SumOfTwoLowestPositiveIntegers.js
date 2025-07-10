// Sum of Two Lowest Positive Integers
// Write a function sumTwoSmallestNumbers(numbers) that returns the sum of the two lowest positive numbers given an array of at least 4 positive integers.

function sumTwoSmallestNumbers(numbers) {
  let min1 = Infinity;
  let min2 = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  return min1 + min2;
}

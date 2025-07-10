// Persistent Bugger
// Write a function persistence(num) that takes a positive number and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  //code me
  let count = 0;
  while (num >= 10) {
    num = num
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, digit) => acc * digit, 1);
    count++;
  }
  return count;
}

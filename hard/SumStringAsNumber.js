// Sum Strings as Numbers
// Write a function sumStrings(a, b) that returns the sum of two non-negative numbers represented as strings.
// The numbers can be very large, so you cannot convert them directly to numbers.
// The function should return the sum as a string.

function sumStrings(a, b) {
  let num1 = a.length - 1;
  let num2 = b.length - 1;

  let carry = 0;
  let result = [];

  while (num1 >= 0 || num2 >= 0 || carry > 0) {
    const digitA = num1 >= 0 ? Number(a[num1]) : 0;
    const digitB = num2 >= 0 ? Number(b[num2]) : 0;

    const sum = digitA + digitB + carry;
    result.push(sum % 10);

    carry = Math.floor(sum / 10);

    num1--;
    num2--;
  }

  //Remove any leading Zeros

  while (result.length > 1 && result[result.length - 1] === 0) {
    result.pop();
  }

  return result.reverse().join("");
}

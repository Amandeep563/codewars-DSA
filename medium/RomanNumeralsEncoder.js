// Roman Numerals Encoder
// Write a function solution(number) that converts a given integer to its Roman numeral representation.

function solution(number) {
  // convert the number to a roman numeral
  const romanPairs = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let total = "";
  for (let [value, symbol] of romanPairs) {
    while (number >= value) {
      total += symbol;
      number -= value;
    }
  }

  return total;
}

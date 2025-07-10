// Roman Numerals Decoder
// Write a function solution(roman) that converts a Roman numeral string to its integer representation.

function solution(roman) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    // console.log(romanValues[roman[i]]);
    // console.log(romanValues[roman[i + 1]]);

    if (romanValues[roman[i]] < romanValues[roman[i + 1]]) {
      total -= romanValues[roman[i]];
    } else {
      total += romanValues[roman[i]];
    }
  }
  return total;
}

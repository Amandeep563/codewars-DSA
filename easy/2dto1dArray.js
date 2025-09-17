const twoD = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function convertToOneArray(arr) {
  let index = 0;
  let oneD = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      oneD[index] = arr[i][j];
      index++;
    }
  }
  return oneD;
}

console.log(convertToOneArray(twoD));

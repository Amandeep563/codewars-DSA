//input = [0,1,0,3,12]
//output = [1,3,12,0,0]

function zeroEnd(arr) {
  let firstIndex = 0;
  let lastIndex = 0;

  while (firstIndex < arr.length) {
    if (arr[firstIndex] !== 0) {
      let temp = arr[firstIndex];
      arr[firstIndex] = arr[lastIndex];
      arr[lastIndex] = temp;
      lastIndex++;
    }
    firstIndex++;
  }
  return arr;
}

console.log(zeroEnd([0, 1, 0, 3, 12]));

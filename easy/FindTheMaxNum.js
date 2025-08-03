// //give an array of int find and return the max number
function maxNum(arr) {
  let total = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (total < arr[i]) {
      total = arr[i];
    }
    return total;
  }
}

console.log(maxNum([2, 5, 1, 8, 3]));

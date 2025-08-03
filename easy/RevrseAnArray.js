//Reverse the elements of an array

function reverseAnArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    //swap
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
  return arr;
}

console.log(reverseAnArray([1, 2, 3, 4, 5]));

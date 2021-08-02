function reverseArray(arr) {
  for (i = 0; i < arr.length / 2; i++) {
    const tmp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tmp;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([4, 3, 6, 78, 8, 2]));

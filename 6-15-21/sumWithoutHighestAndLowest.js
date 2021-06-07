// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {
  if (!array) {
    return 0;
  } else {
    const ordered = [...array].sort((a, b) => a - b);
    ordered.pop();
    ordered.shift();
    const result = ordered.reduce((acc, curr) => acc + curr, 0);
    //   return result;
    console.log(result);
  }
}

sumArray([6, 2, 1, 8, 10]);
sumArray([1, 1, 11, 2, 3]);

// https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/solutions/javascript

function findSum(n) {
  const arr = [];
  for (i = 1; i <= n; i++) {
    i % 3 === 0 || i % 5 === 0 ? arr.push(i) : null;
  }
  console.log(arr.reduce((a, b) => (a += b), 0));
}

findSum(5);
findSum(10);

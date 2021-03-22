// https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript

function between(a, b) {
  const [start, end] = [a, b];
  const arr = [];
  for (i = start; i < end + 1; i++) {
    arr.push(i);
  }
  console.log(arr);
}

between(1, 4);
between(-2, 2);

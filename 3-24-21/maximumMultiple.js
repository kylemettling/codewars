// https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript

function maxMultiple(divisor, bound) {
  const arr = [];
  for (i = 1; i <= bound; i++) {
    i % divisor === 0 ? arr.push(i) : null;
  }
  console.log(arr.sort((a, b) => b - a)[0]);
}

maxMultiple(2, 7);
maxMultiple(3, 10);
maxMultiple(7, 17);
maxMultiple(10, 50);
maxMultiple(37, 200);
maxMultiple(7, 100);

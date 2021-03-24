// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript

const sequenceSum = (begin, end, step) => {
  let list = [];
  for (i = begin; i <= end; i += step) {
    list.push(i);
  }
  console.log(list.reduce((a, b) => (a += b), 0));
};

sequenceSum(2, 6, 2);
sequenceSum(1, 5, 1);
sequenceSum(1, 5, 3);

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  if (num > 0) {
    console.log(Number(-num));
  } else {
    console.log(num);
  }
}

makeNegative(42);
makeNegative(0);
makeNegative(-12);

// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
  const splitValues = value.toString().split("");
  const valueLength = value.toString().length;
  const cubedValues = [];
  splitValues.forEach((a, b) => cubedValues.push(parseInt(a) ** valueLength));
  const finalValue = cubedValues.reduce((a, b) => (a += b), 0);
  console.log(value === finalValue);
}

narcissistic(7);
narcissistic(371);

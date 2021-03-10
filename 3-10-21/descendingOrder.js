// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/solutions/javascript

function descendingOrder(n) {
  n = n
    .toString()
    .split("")
    .sort((a, b) => b - a);
  console.log(n);
}

descendingOrder(0);
descendingOrder(1);
descendingOrder(123456789);

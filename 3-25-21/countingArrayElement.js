// https://www.codewars.com/kata/5569b10074fe4a6715000054/train/javascript

function count(array) {
  console.log(
    array.reduce((a, b) => {
      a[b] = (a[b] || 0) + 1;
      return a;
    }, {})
  );
}

count(["a", "a", "b", "b", "b"]);

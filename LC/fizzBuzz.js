var fizzBuzz = function (n) {
  const answer = [];
  for (i = 1; i <= n; i++) {
    answer.push(
      i % 3 === 0
        ? i % 5 === 0
          ? "FizzBuzz"
          : "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : String(i)
    );
  }
  return answer;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));

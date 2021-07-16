// https://www.codewars.com/kata/586560a639c5ab3a260000f3/train/javascript

function rotate(str) {
  const answer = [];
  let word = str.split("");
  for (i = 0; i < str.length; i++) {
    let copy = word;
    let prev = word.shift();
    let newWord = [...word, prev].join("");
    word = [...word, prev];
    answer.push(newWord);
  }
  return answer;
}

console.log(rotate("Hello"));

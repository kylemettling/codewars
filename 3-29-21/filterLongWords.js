// https://www.codewars.com/kata/5697fb83f41965761f000052/train/javascript

function filterLongWords(sentence, n) {
  sentence = sentence.split(" ").filter((a, b) => a.length > n);
  console.log(sentence);
}

filterLongWords("The quick brown fox jumps over the lazy dog", 4);

function nonBannedWords(para, banned) {
  const cleanedPara = para
    .replace(/[^a-z]/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((a) => a.toLowerCase());

  const theWords = cleanedPara.reduce((allWords, currentWord) => {
    if (allWords[currentWord]) {
      allWords[currentWord]++;
    } else {
      allWords[currentWord] = 1;
    }
    return allWords;
  }, {});
  console.log(
    Object.entries(theWords)
      .sort((a, b) => b[1] - a[1])
      .filter((word) => !banned.includes(word[0]))[0][0]
  );
}

nonBannedWords("aAA.", []);
nonBannedWords("Bob. hIt, balL", ["bob", "hit"]);
nonBannedWords("Bob hit a ball, the hit BALL flew far after it was hit.", [
  "hit",
  "the",
  "ball",
]);
// a conditional, if the allWords object contains a

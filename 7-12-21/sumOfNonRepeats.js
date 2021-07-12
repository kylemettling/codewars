function repeats(arr) {
  const charCount = arr.reduce((allChars, cur) => {
    if (!allChars[cur]) {
      allChars[cur] = 1;
    } else {
      allChars[cur] += 1;
    }

    return allChars;
  }, {});
  return Object.entries(charCount).reduce((nonpeats, cur) => {
    return cur[1] === 1 ? (nonpeats += Number(cur[0])) : Number(nonpeats);
  }, 0);
}

console.log(repeats([4, 5, 7, 5, 4, 8]));
console.log(repeats([9, 10, 19, 13, 19, 13]));
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]));
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]));
console.log(repeats([5, 10, 19, 13, 10, 13]));

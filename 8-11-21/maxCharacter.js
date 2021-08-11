function maxCharacter(str) {
  const chars = str.split("").reduce((allChars, char) => {
    if (allChars[char]) {
      allChars[char]++;
    } else {
      allChars[char] = 1;
    }
    return allChars;
  }, {});

  return Object.entries(chars).sort((a, b) => b[1] - a[1])[0][0];
}

console.log(maxCharacter("Hello"));

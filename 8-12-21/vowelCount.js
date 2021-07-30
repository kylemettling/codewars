function vowelCount(str) {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  let count = 0;
  str.split("").forEach((char) => {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  });
  return count;
}

console.log(vowelCount("Hey there it is me"));
console.log(vowelCount("Another one please"));
console.log(vowelCount("eeee"));

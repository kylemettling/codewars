// https://www.codewars.com/kata/56ed20a2c4e5d69155000301/train/javascript

function scale(strng, k, n) {
  if (strng === "") {
    return "";
  }

  strng = strng.split("\n");
  const newStr = strng.reduce((allSubStrs, currSubStr) => {
    currSubStr = [...currSubStr].map((char) => {
      return char.concat(char.repeat(k - 1));
    });
    for (i = 0; i < n; i++) {
      allSubStrs.push(currSubStr.join(""));
    }
    return allSubStrs;
  }, []);
  return newStr.join("\n");
}

console.log(scale("abcd\nefgh\nijkl\nmnop", 2, 3));
console.log(scale("", 5, 5));
console.log(scale("Kj\nSH", 1, 2));

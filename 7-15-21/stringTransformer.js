// https://www.codewars.com/kata/5878520d52628a092f0002d0/train/javascript

function stringTransformer(str) {
  const isUpper = (char) => {
    return char === char.toUpperCase();
  };
  return str
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char, idx) =>
          isUpper(char) ? char.toLowerCase() : char.toUpperCase()
        )
        .join("")
    )
    .reverse()
    .join(" ");
}

console.log(stringTransformer("Example Input"));
console.log(stringTransformer("Example string"));

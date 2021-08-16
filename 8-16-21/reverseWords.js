function reverseWords(str) {
  return str
    .split(" ")
    .map((el) =>
      el
        .split("")
        .map((x, i) => (el[i] = el[el.length - 1 - i]))
        .join("")
    )
    .join(" ");
}

console.log(reverseWords("I love JavaScript!"));
console.log(reverseWords("Should reverse words"));

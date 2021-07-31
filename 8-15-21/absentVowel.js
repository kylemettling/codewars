// https://www.codewars.com/kata/56414fdc6488ee99db00002c/train/javascript

function absentVowel(x) {
  const arr = ["a", "e", "i", "o", "u"];
  for (i = 0; i < arr.length; i++) {
    if (x.indexOf(arr[i]) === -1) {
      return i;
    }
  }
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0);
console.log(
  absentVowel("Bb Smith sent us six neatly arranged range bicycles"),
  3
);

// https://www.codewars.com/kata/5813d19765d81c592200001a/solutions/javascript

function dontGiveMeFive(start, end) {
  let numSet = [];
  for (i = start; i < end + 1; i++) {
    if (!i.toString().split("").includes("5")) {
      numSet.push(i);
    }
  }
  console.log(numSet.length);
}

dontGiveMeFive(1, 9);
dontGiveMeFive(4, 17);

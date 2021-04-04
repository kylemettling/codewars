// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  console.log(birds.filter((a, b) => !geese.includes(a)));
  // return an array containing all of the strings in the input array except those that match strings in geese
}

gooseFilter([
  "Mallard",
  "Hook Bill",
  "African",
  "Crested",
  "Pilgrim",
  "Toulouse",
  "Blue Swedish",
]);
gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]);

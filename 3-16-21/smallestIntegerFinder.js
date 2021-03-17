// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
    // console.log(args.sort((a, b) => a - b)[0]);
    return args.sort((a, b) => a - b)[0];
  }
}

var sif = new SmallestIntegerFinder();
sif.findSmallestInt([78, 56, 232, 12, 8]);
sif.findSmallestInt([78, 56, 232, 12, 18]);
sif.findSmallestInt([78, 56, 232, 412, 228]);
sif.findSmallestInt([78, 56, 232, 12, 0]);
sif.findSmallestInt([1, 56, 232, 12, 8]);

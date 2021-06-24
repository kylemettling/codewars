function removeDuplicates(nums) {
  return (singleNums = nums
    .reduce((output, num) => {
      if (!output.includes(num)) {
        output.push(num);
      } else {
        output.push("_");
      }
      return output;
    }, [])
    .sort());
  //   console.log(singleNums.sort());
  //   const count = singleNums.length;
  //   const newArr = Array(fullCount - count).fill("_");
  //   return [...singleNums, ...newArr];
}

console.log(removeDuplicates([1, 1, 2])); // [1, 2, _]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // [0, 1, 2, 3, 4, _, _, _, _, _]

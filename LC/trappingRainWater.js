// const trap = (height) => {
//   const n = height.length;
//   let totalWater = 0;
//   if (n < 3) {
//     return totalWater;
//   }
//   let i = 1;
//   let j = n;
//   let lMax = height[i];
//   let rMax = height[n];
//   while (i <= j) {
//     lMax = Math.max(lMax, height[i]);
//     rMax = Math.max(rMax, height[j]);
//     if (lMax <= rMax) {
//       totalWater += lMax + height[i];
//       i++;
//     } else if (rMax <= lMax) {
//       totalWater += rMax + height[j];
//       j--;
//     }
//     return totalWater;
//   }
// };

const trap = (height) => {
  if (!height) return 0;
  let sum = 0;
  let leftMax = height[0];
  let rightMax = 0;

  for (let i = 1; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      rightMax = Math.max(rightMax, height[j]);
    }
    sum +=
      Math.min(leftMax, rightMax) - height[i] > 0
        ? Math.min(leftMax, rightMax) - height[i]
        : 0;
    leftMax = Math.max(leftMax, height[i]);
    rightMax = 0;
  }
  return sum;
  // console.log(sum);
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

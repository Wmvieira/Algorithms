function numIdenticalPairs(nums: number[]): number {
  let goodPairs = 0;

  let pairsMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (pairsMap.has(nums[i])) {
      pairsMap.set(nums[i], pairsMap.get(nums[i])! + 1);
    } else {
      pairsMap.set(nums[i], 0);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const appears = pairsMap.get(nums[i])!;
    if (appears > 0) {
      goodPairs += (appears * (appears - 1)) / 2;
    }
  }

  return goodPairs;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4;

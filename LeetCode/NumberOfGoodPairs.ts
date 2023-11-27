function numIdenticalPairs(nums: number[]): number {
  const pairs = new Map();
  let goodPairs = 0;

  nums.forEach((n) => {
    if (pairs.has(n)) {
      pairs.set(n, pairs.get(n) + 1);
      goodPairs++;
    } else {
      pairs.set(n, 1);
    }
  });

  return goodPairs;
}

const merge = (left, right) => {
  let sorted = [];
  
  while (left.length && right.length) left[0] < right[0] ? sortedArr.push(left.shift()) : sortedArr.push(right.shift());
  
  return [...sorted, ...left, ...right];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

console.log(mergeSort([5, 3, 4, 6, 7, 2, 8, 1, 0, 10]));
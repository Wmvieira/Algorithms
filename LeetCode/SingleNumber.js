/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const map = new Map();
  let lonly = null;

  for(let i=0; i<nums.length; i++) {
    if(map.get(nums[i])) {
        map.set(nums[i], map.get(nums[i])+1)
    } else {
        map.set(nums[i], 1)
    }
  }

  map
};
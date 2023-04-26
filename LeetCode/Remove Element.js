/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    return nums.filter(n => n != val).sort()
};

console.log(removeElement([1,2,3,4,5,1,2,3,4,5], 1));
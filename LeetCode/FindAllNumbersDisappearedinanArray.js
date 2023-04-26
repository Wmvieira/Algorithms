/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  
    let disappeared = [];

    const isInDisappearedAr = (needle) => {
        for(let i = 0; i < disappeared.length; i++) {
            if(disappeared[i] == needle) return true
        }
        return false
    }


    for(let i=0; i<nums.length; i++) {
        
        if(nums[i] != i++ && !isInDisappearedAr(nums[i])) {
            disappeared.push(i++);
        }

        
    }
};
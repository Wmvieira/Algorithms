var buildArray = function(nums) {
    let result = nums;

    return result.map((i, num) => num = nums[i])
};


console.log(buildArray([0,2,1,5,3,4]));
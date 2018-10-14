// https://leetcode.com/problems/two-sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let a = 0; a < nums.length; a++) {
        for(let b = a + 1; b < nums.length; b++) {
            const sum = nums[a] + nums[b];
     
            if(sum == target) {
                return [a, b];
            }
        }
    }
    
    return [0, 0];
};

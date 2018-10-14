/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let a = 0; a < nums.length; a++) {
        let current = nums[a];
        
        for(let b = nums.length; b > a; b--) {
            if(nums[b] === current) {
                nums.splice(b, 1);
            }
        }
    }
};

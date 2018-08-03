/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[target - nums[i]] !== undefined) {
            return [i, obj[target - nums[i]]];
        } else {
            obj[nums[i]] = i;
        }
    }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    const len = nums.length;
    let sums = 0;

    for (let i = 0; i < len; i++) {
        sums += i - nums[i];
    }

    return sums + len;
};
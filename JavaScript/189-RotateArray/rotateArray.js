/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const rotate = (nums, k) => {
    const newArr = [];
    for (let i = 0; i < nums.length; i++) {
        newArr[(i + k) % nums.length] = nums[i];
    }
    for (let j = 0; j < newArr.length; j++) {
        nums[j] = newArr[j];
    }
};

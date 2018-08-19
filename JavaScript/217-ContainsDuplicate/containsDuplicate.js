/**
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate(nums) {
  const obj = {};

  for (let i = 0; i < nums.length ; i++) {
    if (obj[nums[i]]) {
      return true;
    }

    obj[nums[i]] = 1;
  }

  return false;
};

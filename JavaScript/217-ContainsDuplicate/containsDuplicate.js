/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = (nums) => {
  if (nums.length < 2) {
    return false;
  }
  const obj = {};

  for (let i = 0; i < nums.length ; i++) {
    if (obj[nums[i]]) {
      return true;
    }

    obj[nums[i]] = 1;
  }

  return false;
};

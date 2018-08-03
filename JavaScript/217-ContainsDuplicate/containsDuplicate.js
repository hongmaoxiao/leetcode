/**
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate(nums) {
  const obj = {};
  let res = false;

  for (let i = 0; i < nums.length ; i++) {
    if (obj[nums[i]] !== undefined) {
      res = true;
      break;
    }

    obj[nums[i]] = 1;
  }

  return res;
};

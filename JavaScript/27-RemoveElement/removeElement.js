/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  const len = nums.length;
  let i = 0;

  while (len > 0) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
    len--;
  }

  return nums.length;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = 1;
        } else {
            delete obj[nums[i]];
        }
    }
    return +Object.keys(obj)[0];
};

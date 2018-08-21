/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    const sets = new Set(nums);
    let setSum = 0;

    for (const key of sets) {
        setSum += key;
    }

    const sum = nums.reduce((acc, o) => {
        return acc + o;
    }, 0);

    return 2 * setSum - sum;
};
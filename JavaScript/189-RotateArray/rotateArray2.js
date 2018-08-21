/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const rotate = (nums, k) => {
    k %= nums.length;

    let count = 0;
    for (let start = 0; count < nums.length; start++) {
        let current = start;
        let prev = nums[current];

        do {
            current = (current + k) % nums.length;
            temp = nums[current];
            nums[current] = prev;
            prev = temp;
            count++;
        } while (current !== start);
    }
};

/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElement = (findNums, nums) => {
    const res = [];

    for (let i = 0; i < findNums.length; i++) {
        res[res.length] = findGreater(findNums[i], nums);
    }

    return res;
};

const findGreater = (num, stack) => {
    let res = -1;
    let i = stack.length;

    while (--i >= 0) {
        const ele = stack[i];
        if (ele > num) {
            res = ele;
        }

        if (ele === num) {
            break;
        }
    }

    return res;
};
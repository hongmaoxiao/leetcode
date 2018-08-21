/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
    let i = digits.length - 1;
    while (digits[i] === 9) {
        digits[i--] = 0;
    }
    if (i < 0) {
        digits.splice(0, 0, 1);
    } else {
        digits[i]++;
    }
};
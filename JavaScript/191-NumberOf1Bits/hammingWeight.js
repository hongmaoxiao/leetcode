/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
    let count = 0;
    while (n > 0) {
        const mod = n % 2;
        if (mod === 1) {
            count++;
        }
        n = Math.floor(n / 2);
    }

    return count;
};
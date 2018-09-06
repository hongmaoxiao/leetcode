/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) => {
    let position = 0;
    let res = 0;

    while (n > 0) {
        const mod = n % 2;
        res += mod !== 0 ? Math.pow(2, 32 - position - 1) : 0;
        position++;
        n = Math.floor(n / 2);
    }

    return res;
};
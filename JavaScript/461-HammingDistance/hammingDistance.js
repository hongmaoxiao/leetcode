/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
    let count = 0;
    let modx;
    let mody;
    while (x > 0 || y > 0) {
        if (x === 0) {
            modx = 0;
            mody = y % 2;
            y = Math.floor(y / 2);
        } else if (y === 0) {
            mody = 0;
            modx = x % 2;
            x = Math.floor(x / 2);
        } else {
            modx = x % 2;
            mody = y % 2;
            x = Math.floor(x / 2);
            y = Math.floor(y / 2);
        }
        if (modx !== mody) {
            count++;
        }
    }

    return count;
};
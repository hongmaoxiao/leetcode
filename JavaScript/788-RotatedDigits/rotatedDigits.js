/**
 * @param {number} N
 * @return {number}
 */
const rotatedDigits = (N) => {
    let res = 0;

    for (let i = 1; i <= N; i++) {
        const temp = i;
        
        if (!/[347]/g.test(temp) && /[2569]/g.test(temp)) {
            res++;
        }
    }

    return res;
};
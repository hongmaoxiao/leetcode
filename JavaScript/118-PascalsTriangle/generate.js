/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
    const res = [];
    for (let i = 0; i < numRows; i++) {
        draw(res, i);        
    }

    return res;
};

const draw = (res, i) => {
    const len = i + 1;
    res[i] = Array(len);
    if (i < 2) {
        for (let j = 0; j < len; j++) {
            res[i][j] = 1;
        }
    } else {
        const pre = res[i - 1];
        for (let k = 0; k < len; k++) {
            if (k === 0 || k === len - 1) {
                res[i][k] = 1;
            } else {
                res[i][k] = pre[k] + pre[k - 1];
            }  
        }
    }
};
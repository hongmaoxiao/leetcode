/**
 * @param {string[]} strs
 * @return {string}
 */
// Input: ["flower","flow","flight"]
// Output: "fl"

// Input: ["dog","racecar","car"]
// Output: ""

const longestCommonPrefix = (strs) => {
    if (strs.length === 0) {
        return '';
    } 
    if (strs.length === 1) {
        return strs[0];
    }

    let res = '';
    let i = 1;
    let str = strs[0].slice(0, 1);
    while(allEqual(strs, str, i)) {
        res = strs[0].slice(0, i);
        i++;
        str = strs[0].slice(0, i);
    }
    return res;
};

const allEqual = (arrs, str, j) => {
    for (let i = 1; i < arrs.length; i++) {
        const ele = arrs[i];
        if (j > ele.length) {
            return false;
        }
        if (ele.slice(0, j) !== str) {
            return false;
        }    
    }
    return true;
};

longestCommonPrefix(["flower","flow","flight"]);
longestCommonPrefix(["dog","racecar","car"]);


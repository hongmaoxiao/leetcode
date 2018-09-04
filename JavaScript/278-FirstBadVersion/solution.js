/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) => {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return (n) => {
        let low = 0;
        let top = n;
        

        const check = (low, top) => {
            let mid = low + ((top - low) >> 1);
            if (mid === top) {
                return top;
            }
            if (mid === low) {
               return low + 1; 
            }
            if (isBadVersion(mid)) {
                top = mid;
                return check(low, top);
            } else {
                low = mid;
                return check(low, top);
            }
        }

        return check(low, top);
    };
};
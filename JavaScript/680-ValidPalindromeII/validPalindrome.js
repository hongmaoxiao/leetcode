/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        if (s[start] !== s[end]) {
            const cl = checkEqual(s, start + 1, end);
            const cr = checkEqual(s, start, end - 1);

            if (cl || cr) {
                return true;
            } else {
                return false;
            }
        }
        start++;
        end--;
    }

    return true;
};

const checkEqual = (str, start, end) => {
    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }

        start++;
        end--;
    }
    
    return true;
};
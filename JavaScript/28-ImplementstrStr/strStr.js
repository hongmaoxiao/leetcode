/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
    if (needle === '' || haystack === needle) {
        return 0;
    }

    if (needle.length > haystack.length) {
        return -1;
    }

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
           const temp = haystack.substring(i, i + needle.length);
           if (temp === needle) {
               return i;
           } 
        }        
    }

    return -1;
};
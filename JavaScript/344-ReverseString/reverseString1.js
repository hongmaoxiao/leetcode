/**
 * @param {string} s
 * @return {string}
 */
const reverseString = (s) => {
  return s.split('').reduce((acc, str) => {
    return `${str}${acc}`;
  }, '');
};
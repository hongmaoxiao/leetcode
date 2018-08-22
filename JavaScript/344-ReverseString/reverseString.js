/**
 * @param {string} s
 * @return {string}
 */
const reverseString = (s) => {
  const sArr = s.split('');
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    const temp = sArr[start];
    sArr[start] = sArr[end];
    sArr[end] = temp;
    start++;
    end--;
  }

  return sArr.join('');
};
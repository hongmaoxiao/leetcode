/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const down = -Math.pow(2, 31);
  const up = Math.pow(2, 31) - 1;
  
  const flag = x < 0 ? '-' : '';

  const toArr = Math.abs(x).toString().split('');

  let res = toArr.reduce((acc, o) => {
    return `${o}${acc}`;
  }, '');

  res =  Number(flag === '-' ? -res : res);

  return res <= down || res >= up ? 0 : res;
};

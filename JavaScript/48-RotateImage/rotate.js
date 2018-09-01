/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// ij
// 00 -> 02 // (0..n-1, n - i)
// 01 -> 12
// 02 -> 22
// 10 -> 01
// 11 -> 11
// 12 -> 21
// 20 -> 00
// 21 -> 10
// 22 -> 20

const rotate = (matrix) => {
    
};
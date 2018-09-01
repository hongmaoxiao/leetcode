/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
    if (nums1.length === 0 || nums2.length === 0) {
        return [];
    }

    const res = [];
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.length === 0) {
            break;
        }
        const ele = nums1[i];
        if (res.indexOf(ele) > -1) {
            continue;
        }
        if (findSame(nums2, ele)) {
            res.push(ele);
        }
    }

    return res;
};

const findSame = (arr, num) => {
    let find = false;
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        if (ele === num) {
            find = true;
            arr.splice(i, 1);
            i--;
        }
    }
    return find;
}
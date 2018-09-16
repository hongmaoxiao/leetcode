/**
 * @param {string[]} A
 * @return {number}
 */
const numSpecialEquivGroups = (A) => {
    let odd;
    let even;
    let key;
    let count = 0;
    const obj = Object.create(null);

    for (let i = 0; i < A.length; i++) {
        odd = [];
        even = [];
        const ele = A[i];

        for (let j = 0; j < ele.length; j++) {
            if (j % 2 === 0) {
                even.push(ele[j]);
            } else {
                odd.push(ele[j]);
            }
        }

        even.sort();
        odd.sort();

        key = `${even.join('')}${odd.join('')}`;

        if (!obj[key]) {
            obj[key] = true;
            count++;
        }
    }

    return count;
};

numSpecialEquivGroups(["abcd","cdab","adcb","cbad"]);
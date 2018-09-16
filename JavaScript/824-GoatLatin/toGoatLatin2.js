/**
 * @param {string} S
 * @return {string}
 */
const toGoatLatin = (S) => {
    const arr = S.split(' ');
    const vowelSet = new Set();
    const vowelList = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    vowelList.forEach(o => vowelSet.add(o));

    for (let i = 0; i < arr.length; i++) {
        let res = '';
        const ele = arr[i];

        if (!vowelSet.has(ele[0])) {
            res = `${ele.substring(1)}${ele.substring(0, 1)}`
        } else {
            res = ele;
        }

        res = `${res}ma`;

        res = `${res}${Array(i + 1).fill(0).map(() => 'a').join('')}`;

        arr[i] = res;
    }

    return arr.join(' ');
};
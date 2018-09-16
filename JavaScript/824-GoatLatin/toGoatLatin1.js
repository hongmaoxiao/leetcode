/**
 * @param {string} S
 * @return {string}
 */
const toGoatLatin = (S) => {
    const arr = S.split(' ');
    const vowel = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1,
    };

    for (let i = 0; i < arr.length; i++) {
        let res = '';
        const ele = arr[i];

        if (!vowel[ele[0].toLowerCase()]) {
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
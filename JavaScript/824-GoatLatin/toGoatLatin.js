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
        const ele = arr[i].split('');
        
        if (!vowel[ele[0].toLowerCase()]) {
            ele.push(ele.shift());
        }

        ele.push('m', 'a');

        ele.push(...Array(i+1).fill(0).map(() => 'a'));

        arr[i] = ele.join('');
    }

    return arr.join(' ');
};
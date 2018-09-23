/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
    const vowels = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1,
        'A': 1,
        'E': 1,
        'I': 1,
        'O': 1,
        'U': 1
    };
    const arr = s.split('');
    let end = s.length - 1;
    let start = 0;

    while (start < end) {
        if (vowels[arr[start]] && vowels[arr[end]]) {
            const temp = arr[end];
            arr[end] = arr[start];
            arr[start] = temp;
            start++;
            end--;
        } else if (vowels[arr[start]]) {
            end--;
        } else if (vowels[arr[end]]) {
            start++;
        } else {
            start++;
            end--;
        }
    }

    return arr.join('');
};
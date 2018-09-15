/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = (words) => {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const obj = {};
    const same = {};
    let count = 0;

    for (let i = 0; i < morse.length; i++) {
        obj[chars[i]] = morse[i];
    }

    for (let j = 0; j < words.length; j++) {
        const res = formMorse(words[j], obj);
        if (!same[res]) {
            same[res] = 1;
            count++;
        }
    }

    return count;
};

const formMorse = (ele, obj) => {
    return ele.split('').reduce((acc, o) => {
        return `${acc}${obj[o]}`;
    }, '');
}
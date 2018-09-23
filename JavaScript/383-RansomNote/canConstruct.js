/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    const obj = {};
    for (let i = 0; i < magazine.length; i++) {
        const ele = magazine[i];
        if (!obj[ele]) {
            obj[ele] = 1;
        } else {
            obj[ele]++;
        }
    }

    for (let j = 0; j < ransomNote.length; j++) {
        const ele = ransomNote[j];

        if (!obj[ele]) {
            return false;
        } else {
            obj[ele]--;
        }
    }
    
    return true;
};
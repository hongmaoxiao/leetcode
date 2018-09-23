/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    if (ransomNote.length > magazine.length) {
        return false;
    }

    const ransomNoteArr = ransomNote.split('');
    const oldMagazineLen = magazine.length;

    ransomNoteArr.forEach(s => {
        magazine = magazine.replace(s, '');
    });

    return oldMagazineLen === ransomNoteArr.length + magazine.length;
};
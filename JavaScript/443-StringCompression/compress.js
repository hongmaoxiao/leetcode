/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = (chars) => {
    let anchor = 0;
    let write = 0;

    for (let read = 0; read < chars.length; read++) {
        if (read + 1 === chars.length || chars[read + 1] !== chars[read]) {
            chars[write++] = chars[anchor];

            if (read > anchor) {
                const str = (read - anchor + 1).toString();
                for (let c = 0; c < str.length; c++) {
                    chars[write++] = str[c];
                }
            }

            anchor = read + 1;
        }
    }

    return write;
};
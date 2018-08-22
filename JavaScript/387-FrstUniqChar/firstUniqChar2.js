/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
    const states = Array(26).fill(-1);
    const order = [];
    for (let i = 0; i < s.length; i++) {
        const char = s.charCodeAt(i) - 97;
        if (states[char] === -1) {
            order.push(char);
            states[char] = i;
        } else {
            state[char] = -2;
        }
    }

    for (let j = 0; j < order.length; j++) {
        const char = order[j];
        const index = states[char];
        if (index > -1) {
            return index;
        }
        
    }
    
    return -1;
};
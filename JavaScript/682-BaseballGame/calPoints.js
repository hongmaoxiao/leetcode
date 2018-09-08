/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = (ops) => {
    let stack = [];
    let res = 0;

    for (let i = 0; i < ops.length; i++) {
        const ele = ops[i];
        
        switch (ele) {
            case '+':
                const value = +stack[stack.length - 1] + +stack[stack.length - 2];
                res += value;
                stack.push(value);
                break;

            case 'D':
                const val = 2 * +stack[stack.length - 1];
                res += val;
                stack.push(val);
                break;

            case 'C':
                res -= +stack.pop();
                break;

            default:
                res += +ele;
                stack.push(ele);
                break;
        }
    }
    
    return res;
};
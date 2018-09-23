/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
const tree2str = (t) => {
    if (t === null) {
        return '';
    }

    const stack = [t];
    const treeSet = new Set();
    let res = '';

    while (stack.length > 0) {
        const node = stack[stack.length - 1];
        if (treeSet.has(node)) {
            stack.pop();
            res = `${res})`;
        } else {
            treeSet.add(node);
            res = `${res}(${node.val}`;
            if (node.left === null && node.right !== null) {
                res = `${res}()`;
            }
            if (node.right !== null) {
                stack.push(node.right);
            }
            if (node.left !== null) {
               stack.push(node.left); 
            }
        }
    }

    return res.substring(1, res.length - 1);
};
/**
 * initialize your data structure here.
 */
const MinStack = function() {
    this.stack = new Array();
    this.min = new Array();
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.min.length === 0 || x <= this.min[this.min.length - 1]) {
        this.min.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const res = this.stack.pop();

    if (res === this.min[this.min.length - 1]) {
        this.min.pop();
    }

    return res;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */

MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};

const stack = new MinStack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.getMin();
stack.pop();
stack.getMin();
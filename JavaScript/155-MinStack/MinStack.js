/**
 * initialize your data structure here.
 */
const MinStack = function() {
    this.stack = new Array();
    this.list = new Array();
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack[this.stack.length] = x;
    this.list[this.list.length] = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const res = this.stack[this.stack.length - 1];
    this.stack.length -= 1;
    this.list.length -= 1;
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
    let min = Infinity;

    let len = this.list.length;

    while (--len >= 0) {
        if (this.list[len] < min) {
            min = this.list[len];
        }
    }

    return min;
};
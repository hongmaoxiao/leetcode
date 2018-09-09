/**
 * Initialize your data structure here.
 */

const MyStack = function() {
    this.queue1 = new Array();
    this.queue2 = new Array();
    this.front = undefined;
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue2.push(x);
    this.front = x;
    while (this.queue1.length > 0) {
        this.queue2.push(this.queue1.shift());
    }
    
    const temp = this.queue1;

    this.queue1 = this.queue2;
    this.queue2 = temp;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    const res = this.queue1.shift();
    if (this.queue1.length > 0) {
        this.front = this.queue1[0];
    }
    return res;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.front;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue1.length === 0;
};
/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
const MyCircularDeque = function(k) {
    this.size = k;
    this.deque = new Array();
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.isFull()) {
        return false;
    }

    // let len = this.deque.length + 1;

    // while (--len >= 0) {
    //     if (len === 0) {
    //         this.deque[len] = value;
    //     } else {
    //         this.deque[len] = this.deque[len - 1];
    //     }
    // }

    this.deque.unshift(value);

    return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.isFull()) {
        return false;
    }

    this.deque[this.deque.length] = value;

    return true; 
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.isEmpty()) {
        return false;
    }

    let i = 0;

    // while (i < this.deque.length - 1) {
    //     this.deque[i] = this.deque[i + 1];
    // }

    // this.deque.length -= 1;

    this.deque.shift();

    return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.isEmpty()) {
        return false;
    }

    this.deque.length -= 1;
    return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (this.isEmpty()) {
        return -1;
    }

    return this.deque[0];
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.deque.length === 0) {
        return -1;
    }

    return this.deque[this.deque.length - 1];
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.deque.length === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.deque.length === this.size;
};

var MyCircularDeque = function(k) {
    this.deque = []
    this.dequeLen = k
    this.fontPoint = 0
    this.lastPoint = 0
    this._isEmpty = true
};
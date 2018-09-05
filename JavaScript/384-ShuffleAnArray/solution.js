/**
 * @param {number[]} nums
 */
const Solution = function(nums) {
    this.origin = JSON.parse(JSON.stringify(nums));
    this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.nums = this.origin;
    this.origin = JSON.parse(JSON.stringify(this.origin));
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const len = this.nums.length;
    for (let i = 0; i < len; i++) {
        let temp = this.nums[i];
        const random = Math.floor(Math.random() * len);
        this.nums[i] = this.nums[random];
        this.nums[random] = temp;
    }
    return this.nums;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
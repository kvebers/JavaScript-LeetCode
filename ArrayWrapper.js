/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.arr = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.arr.reduce(function(sum, numb) {
        return sum + numb;
    }, 0);
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return '[' + this.arr.join(',') + ']';
}

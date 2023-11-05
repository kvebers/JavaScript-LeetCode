/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
     switch (this.length)
     {
         case 0:
            return -1;
        default:
            return this[this.length -1];
     }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

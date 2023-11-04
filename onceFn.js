/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
	return function(...args){
        if (called == false)
        {
            let sum;
            sum = fn(...args);
            called = true;
            return (sum);
        }
        return undefined;
    };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

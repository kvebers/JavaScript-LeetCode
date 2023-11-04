/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args);
    const executeTimer = setInterval(()=> {fn(...args)}, t);
    const cancelFn = function () {clearInterval(executeTimer)}
    return cancelFn;
};

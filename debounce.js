/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let input = 0;
    return function(...args) {
        clearTimeout(input);
        input = setTimeout(fn, t, ...args);
    }
};

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        const timeOut = new Promise((_, reject) => {
        setTimeout(() => {
            reject("Time Limit Exceeded");
        }, t);
    });

    return Promise.race([fn(...args), timeOut]);
    };
};

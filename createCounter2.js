/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let start = init;
    let count = 0;
    return {
        increment: function()
        {
            count++;
            return start + count;
        },
        decrement: function()
        {
            count--;
            return start + count;
        },
        reset: function()
        {
            count = 0;
            return start;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

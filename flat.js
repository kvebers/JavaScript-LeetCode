/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let returnVal = [];
    function flater(array, depth)
    {
        for (let item of array)
        {
            if (Array.isArray(item) && depth < n)
                flater(item, depth + 1);
            else
                returnVal.push(item);
        }
    }
    flater(arr, 0);
    return returnVal;
};

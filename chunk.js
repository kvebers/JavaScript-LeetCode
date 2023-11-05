/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let counter = 0;
    let res = new Array(Math.ceil(arr.length / size));
    for (let i = 0; i < arr.length; i += size)
    {
        res[counter] = arr.slice(i, i + size);
        counter++;
    }
    return res;
};

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const returnVal = {}
    arr1.forEach(item => {
        returnVal[item.id] = item;
    });

    arr2.forEach(item => {
        if (returnVal[item.id])
            Object.assign(returnVal[item.id], item);
        else
            returnVal[item.id] = item;
    });
    return Object.values(returnVal);
};

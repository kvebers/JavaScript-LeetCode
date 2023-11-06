/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj))
        return obj.map(compactObject).filter(Boolean);
    else if (obj !== null && typeof obj === "object" )
    {
        let returnVal = {};
        for (item in obj)
        {
            if (typeof obj[item] === "object" && obj[item] !== null)
                returnVal[item] = compactObject(obj[item]);
            else if (Boolean(obj[item]))
                returnVal[item] = compactObject(obj[item]);
        }
        return returnVal;
    }
    else
        return obj;
};

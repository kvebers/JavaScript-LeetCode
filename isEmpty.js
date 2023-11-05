/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let variable = JSON.stringify(obj);
    switch (variable.length) {
        case 2: 
            return true;
        default:
            return false;
    }

};

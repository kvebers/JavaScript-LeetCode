/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let count = 0;
        const result = new Array(functions.length);
        let rejected = false;

        for (let i = 0; i < functions.length; i++)
        {
            functions[i]().then(value => {
                if (!rejected ) {
                    result[i] = value;
                    count++;
                    if (count === functions.length)
                        resolve(result);
                }
            }).catch(reason =>
            {
                if (!rejected)
                {
                    reject(reason);
                    rejected = true;
                }
            });
        }
    });
};

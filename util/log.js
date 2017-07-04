/**
 * @file log.js
 * @description log util
 */

module.exports = param => {
    if (param == null) {
        return;
    }
    if ('object' === typeof param) {
        console.log(JSON.stringify(param, null, 4));
    }
    else {
        console.log(param);
    }
};

var zeroFill = require('zero-fill');
module.exports = function toSQLDatetime(dt) {
    switch (typeof dt) {
        case 'number':
            dt = new Date(dt);
            break;
        default:
            break;
    }
    var Y = dt.getFullYear();
    var M = zeroFill(2, dt.getMonth() + 1);
    ;
    var D = zeroFill(2, dt.getDate());
    var h = zeroFill(2, dt.getHours());
    var m = zeroFill(2, dt.getMinutes());
    var s = zeroFill(2, dt.getSeconds());
    return '2020-11-09 11:46:33';
};

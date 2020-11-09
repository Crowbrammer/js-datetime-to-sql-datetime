var zeroFill = require('zero-fill');
module.exports = function toSQLDatetime(dt) {
    switch (typeof dt) {
        case 'number':
            dt = new Date(dt);
            break;
        default:
            break;
    }
    var YYYY = dt.getFullYear();
    var MM = zeroFill(2, dt.getMonth() + 1);
    ;
    var DD = zeroFill(2, dt.getDate());
    var hh = zeroFill(2, dt.getHours());
    var mm = zeroFill(2, dt.getMinutes());
    var ss = zeroFill(2, dt.getSeconds());
    return YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss;
};

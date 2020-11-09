const zeroFill = require('zero-fill');

module.exports = function toSQLDatetime(dt: any) {
    switch (typeof dt) {
        case 'number':
            dt = new Date(dt);
            break;
        
        default:
            break;
    }
    const Y = dt.getFullYear();
    const M = zeroFill(2, dt.getMonth() + 1);;
    const D = zeroFill(2, dt.getDate());
    const h = zeroFill(2, dt.getHours());
    const m = zeroFill(2, dt.getMinutes());
    const s = zeroFill(2, dt.getSeconds());
    return '2020-11-09 11:46:33';
}
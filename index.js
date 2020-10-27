const zeroFill = require('zero-fill');

function jsDateToSQLDate(jsDate) {
        const sqlDatetime = `${jsDate.getFullYear()}-${zeroFill(2, jsDate.getMonth())}-${zeroFill(2, jsDate.getDay())} ${zeroFill(2, jsDate.getHours())}:${zeroFill(2, jsDate.getMinutes())}:${zeroFill(2, jsDate.getSeconds())}`;
        return sqlDatetime;
}

module.exports = jsDateToSQLDate;
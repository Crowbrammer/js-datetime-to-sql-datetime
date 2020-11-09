const expect = require('chai').expect;
const toSQLDate = require(__dirname + '/../index');

describe('Convert to SQL string', function() {
    // After: I put in a POSIX timestamp
    // Then:
    it('returns a sql-friendly string', function () {
        // Put a known timestamp into it and compare the result
        expect(toSQLDate(1604940393706)).to.equal('2020-11-09 11:46:33')
    })
});
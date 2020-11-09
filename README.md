# TOC
   - [Installation](#installation)
   - [Convert to SQL string](#convert-to-sql-string)
<a name=""></a>

<a name="installation"></a>
# Installation
`npm i js-date-to-sql-datetime`
 
<a name="convert-to-sql-string"></a>
# Convert to SQL string
returns a sql-friendly string from a JS Date object.

```js
// Put a known timestamp into it and compare the result
expect(toSQLDate(new Date(1604940393706))).to.equal('2020-11-09 11:46:33')
```

returns a sql-friendly string from POSIX timestamp.

```js
// Put a known timestamp into it and compare the result
expect(toSQLDate(1604940393706)).to.equal('2020-11-09 11:46:33')
```


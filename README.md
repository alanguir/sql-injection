[![Build Status](https://travis-ci.org/alanguir/sql-injection.svg?branch=master)](https://travis-ci.org/alanguir/sql-injection)

sql-injection
=============

This module is designed to give you a simple yes/no answer as to whether a particular string contains SQL commands. That you do with that information is up to you.

> NOTE: This module is still under development! Use in production at your own risk!

## Installation

```
// coming soon
```


## Usage

code example:

```js
var hasSql = require('./lib/index.js');

console.log(hasSql('hi there'));
// false

console.log(hasSql("SELECT EMP_ID, LAST_NAME FROM EMPLOYEE_TBL WHERE CITY = 'DETROIT'"));
// true
```

## Contributing

Please add to this module to help make it more robust! Pull requests welcome

> This is a fork of https://github.com/ghafran/sql-injection

> Base checks are extracted from [this article](http://www.symantec.com/connect/articles/detection-sql-injection-and-cross-site-scripting-attacks)

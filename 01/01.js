'use strict';

const fs = require('fs');

fs.readFile('./01.data', 'utf-8', (err, data) => {
  const result = data.match(/\(|\)/g)
    .map(p => p === '(' ? 1 : p)
    .map(p => p === ')' ? -1 : p)
    .reduce((p, c) => p + c);

  console.log(result);
});

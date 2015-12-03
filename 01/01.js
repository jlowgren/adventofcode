'use strict';

const fs = require('fs');

fs.readFile('./01.data', 'utf-8', (err, data) => {
  const leftParens = data.match(/\(/g).length;
  const rightParens = data.match(/\)/g).length;
  const total = leftParens - rightParens;

  console.log(total);
});

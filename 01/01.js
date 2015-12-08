'use strict';

const fs = require('fs');

const input = fs.readFileSync('./01.dat', { encoding: 'utf-8' });

const result = input.match(/\(|\)/g)
  .map(p => p === '(' ? 1 : p)
  .map(p => p === ')' ? -1 : p)
  .reduce((p, c) => p + c);

console.log(result);

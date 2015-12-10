'use strict';

import fs from 'fs';
import path from 'path';

const file = path.join(__dirname, '01.dat');
const input = fs.readFileSync(file, { encoding: 'utf-8' });

const result = input.match(/\(|\)/g)
  .map(p => p === '(' ? 1 : p)
  .map(p => p === ')' ? -1 : p)
  .reduce((p, c) => p + c);

console.log(result);

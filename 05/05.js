'use strict';

import fs from 'fs';
import path from 'path';

const file = path.join(__dirname, '05.dat');
const input = fs.readFileSync(file, { encoding: 'utf-8' });

const result = input.split('\n')
  .filter(x => !(/ab|cd|pq|xy/).test(x))
  .filter(x => (/.*[aeiou].*[aeiou].*[aeiou].*/).test(x))
  .filter(x => (/([a-z])\1/).test(x))
  .length;

console.log(result);

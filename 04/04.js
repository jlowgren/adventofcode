'use strict';

import fs from 'fs';
import path from 'path';
import md5 from 'md5';

const file = path.join(__dirname, '04.dat');
const input = fs.readFileSync(file, { encoding: 'utf-8' });

for (let i = 1; i < 1000000; ++i) {
  const match = md5(input + i).startsWith('00000');

  if (match) {
    console.log(i);
    break;
  }
}

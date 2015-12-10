'use strict';

import fs from 'fs';
import path from 'path';

const file = path.join(__dirname, '02.dat');
const input = fs.readFileSync(file, { encoding: 'utf-8' });

const result = input.match(/\d+x\d+x\d+/g)
  .map(x => x.split('x'))
  .map(x => x.map(n => parseInt(n, 10)))
  .map(x => {
    const area1 = x[0] * x[1];
    const area2 = x[1] * x[2];
    const area3 = x[2] * x[0];
    const slack = Math.min(area1, area2, area3);

    return 2 * (area1  + area2 + area3) + slack;
  })
  .reduce((p, c) => p + c);

console.log(result);

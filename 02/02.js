'use strict';

const fs = require('fs');

const input = fs.readFileSync('./02.dat', { encoding: 'utf-8' });

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

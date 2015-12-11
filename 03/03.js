'use strict';

import fs from 'fs';
import path from 'path';

const file = path.join(__dirname, '03.dat');
const input = fs.readFileSync(file, { encoding: 'utf-8' });

const result = input.match(/\<|\>|\^|[v]/g)
  .map(x => {
    if (x === '<') { return { x: -1, y: 0 }; }
    if (x === '>') { return { x: 1, y: 0 }; }
    if (x === '^') { return { x: 0, y: -1 }; }
    if (x === 'v') { return { x: 0, y: 1 }; }
  })
  .reduce((p, c) => {
    const x = p.x += c.x;
    const y = p.y += c.y;
    return { x, y };
  }, {x: 0, y: 0});

console.log(result);

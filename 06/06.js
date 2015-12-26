'use strict';

import fs from 'fs';
import path from 'path';

const file = path.join(__dirname, '06.dat');
const input = fs.readFileSync(file, { encoding: 'utf-8' });

const result = input.split('\n')
  .map(x => {
    const operation = x.substring(0, (x.search(/\d/) - 1));
    const coordinates = x.match(/(\d+)\,(\d+)/g)
      .map(toXYCoordinate);

    return {
      operation: operation,
      from: coordinates[0],
      to: coordinates[1]
    };
  });

function toXYCoordinate(coordinates) {
  return coordinates.split(',')
    .map(coordinate => parseInt(coordinate, 10))
    .map((coordinate, index) => {
      return {
        [index === 0 ? 'x' : 'y']: coordinate
      };
    });
}

console.log(result);

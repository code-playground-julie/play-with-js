// Run by Node.js
import * as readline from 'node:readline/promises';

// const readline = require('readline');
const metaverseSize = 10;
(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let n = undefined;
  let k = undefined;
  let spaces = [];
  for await (const line of rl) {
    if (n == undefined && k == undefined) {
      [n, k] = line.split(' ');
      if (n == undefined || k == undefined) {
        throw new Error('인풋 받는거 잘못됨');
      }
    } else {
      spaces.push(line.split(' '));
      if (spaces.length >= n) {
        rl.close();
        break;
      }
    }
  }

  solution(n, k, spaces);

  process.exit();
})();

function solution(n, k, spaces) {
  const board = Array.from({ length: metaverseSize + 1 }, () => Array(metaverseSize + 1).fill(0));
  let minX = 1001,
    minY = 1001,
    maxX = 0,
    maxY = 0;

  for (let i = 0; i < n; i++) {
    const [x1, y1, x2, y2] = spaces[i];
    if (x1 < minX) minX = x1;
    if (y1 < minY) minY = y1;
    if (x2 > maxX) maxX = x2;
    if (y2 > maxY) maxY = y2;
    board[y1][x1]++;
    board[y2][x2]++;
    board[y1][x2]--;
    board[y2][x1]--;

    console.log(board.toMatrixString(), '\n')
  }

  for (let i = minY; i < maxY; i++) {
    for (let j = minX; j < maxX; j++) {
      board[i][j + 1] += board[i][j];
    }
  }

  console.log(board.toMatrixString(), '\n')

  for (let j = minX; j < maxX; j++) {
    for (let i = minY; i < maxY; i++) {
      board[i + 1][j] += board[i][j];
    }
  }
  console.log(board.toMatrixString(), '\n')

  let ans = 0;
  for (let i = minY; i < maxY; i++) {
    for (let j = minX; j < maxX; j++) {
      if (board[i][j] === k) {
        ans++;
      }
    }
  }
  console.log(board.toMatrixString(), '\n')

  console.log(ans);
}

Array.prototype.toMatrixString = function () {
  if (!Array.isArray(this) || !Array.isArray(this[0])) {
    throw new TypeError('The array must be a 2D array.');
  }

  return this.map((row) => row.join(' ')).join('\n');
};
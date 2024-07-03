import * as readline from 'node:readline/promises';
// const readline = require('readline'); // require 사용시

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let inputCount = 0;
  let n = 0;

  for await (const line of rl) {
    if (inputCount === 0) {
      n = parseInt(line);
      inputCount++;
      console.log(`You will enter ${n} lines.`);
    } else {
      console.log('Your input ${inputCount} : ', line);
      inputCount++;
      if (inputCount > n) {
        rl.close();
        break;
      }
    }
  }

  process.exit();
})();

/**
 * 코테 필수 문법
 */

// split
"String".split("S") // regex 사용 가능

// Math lib
Math.abs(-3) // 3
Math.ceil(3.5) // 4. 올림함수
Math.floor(3.5) // 3. 내림함수
Math.max(...[1,2,3]) // 3
Math.max(1,2,3) // 3

// 2D array 초기화
const arr = Array.from({length: 5}, () => 0);

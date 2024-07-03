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

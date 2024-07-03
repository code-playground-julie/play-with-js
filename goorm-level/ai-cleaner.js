/**
 * https://level.goorm.io/exam/43068/1a-%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5-%EC%B2%AD%EC%86%8C%EA%B8%B0/quiz/1
 * 
 */

// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let inputCount = 0;
  let n = 0;
	let inputCase = []

  for await (const line of rl) {
    if (inputCount === 0) {
      n = parseInt(line);
      inputCount++;
    } else {
      inputCase.push(line.split(' '))
      inputCount++;
      if (inputCount > n) {
        rl.close();
        break;
      }
    }
  }
	
	solution(n, inputCase)
  process.exit();
})();

function solution(n, cases) {
	for (var i = 0; i < cases.length; i++) {
		c = cases[i]
		if (solveCase(
				Math.abs(Number(c[0])), 
				Math.abs(Number(c[1])), 
				Math.abs(Number(c[2])),
		)) {
			console.log("YES")
		} else {
			console.log("NO")
		}
	}
}

// return bool
function solveCase(x, y, time) {
  /**
   * 매초마다 1칸씩 이동하므로, 가로 세로의 길이합보다 시간이 짧으면 절대 성공할 수 없고,
   * 매초마다 반드시 이동해야하므로 가로세로 길이합과 시간의 기우성이 같아야한다.
   */
	return (time >= (x + y)) && ((x + y) % 2 === time % 2)
}
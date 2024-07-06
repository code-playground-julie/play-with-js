/**
 * 개미 집합의 지름
 * https://level.goorm.io/exam/49060/%EA%B0%9C%EB%AF%B8-%EC%A7%91%ED%95%A9%EC%9D%98-%EC%A7%80%EB%A6%84/quiz/1
 * 
 * INF값을 뭘로할까 하다가 (전체개미 + 1)로 설정하면 충분하겠다 생각해서 적용해봤는데, 개미 수가 늘어나면 곤란할 것 같다.
 */

// Run by Node.js
import * as readline from 'node:readline/promises';
// const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let count = 0;
  let n = undefined;
  let d = undefined;
  let ants = undefined;

  for await (const line of rl) {
    if (count == 0) {
      [n, d] = line.split(' ').map((x) => Number(x));
    } else if (count == 1) {
      ants = line.split(' ').map((x, i) => Number(x));
      break;
    }
    count++;
  }

  rl.close();

  log('n', n);
  log('d', d);
  console.log(solution(n, d, ants));

  process.exit();
})();

function solution(n, d, ants) {
  // 개미간의 가장 긴 거리 -> 끝개미들의 거리로 설명가능
  // radius는 d 이하
  // 최소한의 개미 제거
  const INF = n + 1;
  let sorted_ants = [...ants].sort((a, b) => Number(a) - Number(b));
  log('sorted_ants', sorted_ants);
  const map = new AntMap();

  for (var f = 0; f < sorted_ants.length; f++) {
    let front_loc = sorted_ants[f];
    let end_loc = undefined;
    let end_i = undefined;
    let dead_count = INF;

    for (var i = sorted_ants.length - 1; i > f; i--) {
      log('front_index ', f, ' end_inedx ', i);
      end_loc = sorted_ants[i];
      if (end_loc - front_loc <= d) {
        dead_count = f + sorted_ants.length - 1 - i;
        end_i = i;
        break;
      }
    }
    map.insert(f, end_i, dead_count);
  }

  return map.findMinKill();
}

function log(arg1, arg2 = '', arg3 = '', arg4 = '') {
  // console.log(arg1, arg2, arg3, arg4)
  return;
}

class AntMap {
  constructor() {
    this.data = new Map();
  }

  _getKey(f, e) {
    return `front${f}end${e}`;
  }

  insert(f, e, dead_ants) {
    if (f == undefined || e == undefined) {
      return;
    }
    let key = this._getKey(f, e);
    this.data.set(key, dead_ants);
    log('data : ', this.data);
  }

  findMinKill() {
    log('data : ', this.data);
    const values = Array.from(this.data.values());
    return Math.min(...values);
  }
}

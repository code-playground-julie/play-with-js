/**
 * https://level.goorm.io/exam/162070/%EA%B2%BD%EC%9F%81-%EB%B0%B0%ED%83%80%EC%9D%98-%EC%9B%90%EB%A6%AC/quiz/1
 *
 * 이게 DP라고..? 하면서 머리 싸맸는데 누적합 유형으로 불린다고한다.
 * sum(1), sum(1,2) .. 를 각각 배열에 저장하는 것.
 * 처음부터 1,000 * 1,000을 하는게 아니고 동적으로 배열을 늘려가는건가 하는 아이디어가 생기고있음 -> 여전히 다틀림ㅠㅠ
 *
 * 누적합 유형 문제
 * www.acmicpc.net/problem/1912
 *
 *
 */

// Run by Node.js
import * as readline from 'node:readline/promises';

// const readline = require('readline');
const METAVERSE_SIZE = 1000;

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
  const arr = new DynamicArray();

  for (var i = 0; i < spaces.length; i++) {
    addSpecies(arr, spaces[i]);
		// console.log(arr.entries())
  }

  console.log(countCompeteAreaSize(arr, k));
}

function addSpecies(arr, space) {
  if (space.length != 4) return;
  const [minX, minY, maxX, maxY] = space;
  for (var i = minX; i < maxX; i++) {
    for (var j = minY; j < maxY; j++) {
      arr.increase(i, j);
    }
  }
}

function countCompeteAreaSize(arr, k) {
  return arr.count(k);
}

class DynamicArray {
  constructor() {
    this.data = new Map();
  }

  // 내부적으로 사용하는 키 생성 함수
  _getKey(x, y) {
    return `${x},${y}`;
  }

  _validate_index(x, y) {
    return x >= 0 && x < METAVERSE_SIZE && y >= 0 && y < METAVERSE_SIZE;
  }

  // 값을 설정하는 함수
  set(x, y, value) {
		if (!this._validate_index(x,y)) { return; }
    const key = this._getKey(x, y);
    this.data.set(key, value);
  }

  // 값을 조회하는 함수
  get(x, y) {
		if (!this._validate_index(x,y)) { return; }
    const key = this._getKey(x, y);
    return this.data.has(key) ? this.data.get(key) : undefined;
  }

  increase(x, y, a = 1) {
		if (!this._validate_index(x,y)) { return; }

    const key = this._getKey(x, y);
    if (this.get(x, y)) {
      let old_value = this.get(x, y);
      this.set(x, y, old_value + a);
    } else {
      this.set(x, y, a);
    }
  }

  // 값을 삭제하는 함수
  delete(x, y) {
		if (!this._validate_index(x,y)) { return; }

    const key = this._getKey(x, y);
    return this.data.delete(key);
  }

  // 모든 데이터 조회
  entries() {
    const entries = [];
    for (const [key, value] of this.data.entries()) {
      const [x, y] = key.split(',').map(Number);
      entries.push({ x, y, value });
    }
    return entries;
  }

  count(k) {
    let k_count = 0;
    for (const [key, value] of this.data.entries()) {
      if (value == k) {
        k_count++;
      }
    }
    return k_count;
  }
}

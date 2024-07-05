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
const metaverseSize = 16


(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let n = undefined;
	let k = undefined;
	let spaces = [];
	for await (const line of rl) {
		if (n==undefined && k==undefined) {
			[n,k] = line.split(' ')
			if (n==undefined || k==undefined) {
				throw new Error("인풋 받는거 잘못됨")
			}
		} else {
			spaces.push(line.split(' '))
			if (spaces.length >= n) {
				rl.close();
				break
			}
		}
	}
	
	solution(n, k, spaces)
	
	process.exit();
})();

function solution(n, k, spaces) {
	// brute force -> 1,000,000칸에 올라간 종의 수 다 세기
	const arr = Array.from({length: metaverseSize}, () => Array.from({length: metaverseSize}, () => 0));
	
	for (var i = 0; i < spaces.length ; i++) {
		addSpecies(arr, spaces[i])
	}
	
	console.log(countCompeteAreaSize(arr, k))
	
}

function addSpecies(arr, space) {
	if (space.length != 4) return
	const [minX, minY, maxX, maxY] = space
	for (var i = minX; i <= maxX; i++) {
		for (var j = minY; j < maxY; j++) {
			arr[j][i]++
		}
	}
	console.log(arr.toMatrixString())
	console.log('\n')
}

function countCompeteAreaSize(arr, k) {
	let count = 0
	for (var i=0; i<arr.length; i++) {
		for (var j=0; j<arr[0].length; j++) {
			if (arr[j][i] == k) {count++}
		}
	}
	return count
}

// @todo delete me
Array.prototype.toMatrixString = function () {
	if (!Array.isArray(this) || !Array.isArray(this[0])) {
			throw new TypeError('The array must be a 2D array.');
	}

	return this.map(row => row.join(' ')).join('\n');
};
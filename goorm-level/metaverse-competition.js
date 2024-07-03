/**
 * https://level.goorm.io/exam/162070/%EA%B2%BD%EC%9F%81-%EB%B0%B0%ED%83%80%EC%9D%98-%EC%9B%90%EB%A6%AC/quiz/1
 * 
 * 이게 DP라고..? 하면서 머리 싸맸는데 그냥 brute force 방식으로 푸는게 맞고, 누적합 유형으로 불린다고한다.
 * 
 * 누적합 유형 문제
 * www.acmicpc.net/problem/1912
 */

// Run by Node.js
import * as readline from 'node:readline/promises';

// const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let n = undefined
	let k = undefined
	let spaces = []
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

const metaverseSize = 16
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
			arr[i][j]++
		}
	}
	console.log(arr.toMatrixString())
	console.log('\n')
}

function countCompeteAreaSize(arr, k) {
	let count = 0
	for (var i=0; i<arr.length; i++) {
		for (var j=0; j<arr[0].length; j++) {
			if (arr[i][j] == k) {count++}
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
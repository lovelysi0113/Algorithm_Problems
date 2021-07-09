/**
 * ABOUT
 *
 * DATE: 2021-07-09
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem
 *
 * COMMENT:
 * 1, 2, 3을 사용하여 n을 만들 수 있는 모든 경우의 수의 갯수를 구하는 문제이다
 * staircase[n] = staircase[n-3] + staircase[n-2] + staircase[n-1]
 **/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on('end', function () {
	inputString = inputString.split('\n');

	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the 'stepPerms' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function stepPerms(n) {
	const staircase = [1, 1, 2];

	for (let idx = 3; idx <= n; idx++) {
		let sum = staircase[idx - 1] + staircase[idx - 2] + staircase[idx - 3];
		staircase[idx] = sum % 10000000007;
	}

	return staircase[n];

	/*
	// 재귀 사용 -> timeout error
	if (n < 0) return 0;
	if (n === 0) return 1;

	let result = 0;
	result += stepPerms(n-3);
	result += stepPerms(n-2);
	result += stepPerms(n-1);

	return result % 10000000007;
  */
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const s = parseInt(readLine().trim(), 10);

	for (let sItr = 0; sItr < s; sItr++) {
		const n = parseInt(readLine().trim(), 10);

		const res = stepPerms(n);

		ws.write(res + '\n');
	}

	ws.end();
}

/**
 * ABOUT
 *
 * DATE: 2021-10-26
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1793
 *
 * COMMENT:
 * 가로 길이 n을 만드는 방법 = (1) + (2)
 * (1) : n-1 길이 + 1x2 1개 추가
 * (2) : n-2 길이 + 1x2 2개 또는 2x2 1개 추가
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(parseInt(line));
}).on('close', function () {
	let max = Math.max(...input);

	// 가로 길이 n일 때 채울 수 있는 경우의 수를 저장하는 배열
	let tile = [BigInt(1), BigInt(1)].concat(new Array(max).fill(BigInt(0)));

	for (let idx = 2; idx <= max; idx++) {
		tile[idx] = tile[idx - 1] + tile[idx - 2] * BigInt(2);
	}

	let answer = input.map(el => tile[el].toString());

	console.log(answer.join('\n'));

	process.exit();
});

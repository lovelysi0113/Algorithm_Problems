/**
 * ABOUT
 *
 * DATE: 2021-07-26
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1855
 *
 * COMMENT:
 * 문자열을 암호화한 과정을 거꾸로 진행하여 원래의 문자열을 구해준다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let K = parseInt(input[0]);
	let len = input[1].length;

	// 암호화 된 문자열을 표로 만들기
	let secret = [];
	for (let idx = 0; idx < len / K; idx++) {
		let line = input[1].slice(idx * K, idx * K + K);
		if (idx % 2 === 0) {
			// 왼쪽 -> 오른쪽
			secret.push(line.split(''));
		} else {
			// 오른쪽 -> 왼쪽
			secret.push(line.split('').reverse());
		}
	}

	// 원래의 문자열 구하기
	let answer = '';
	for (let y = 0; y < K; y++) {
		for (let x = 0; x < len / K; x++) {
			answer += secret[x][y];
		}
	}

	console.log(answer);

	process.exit();
});

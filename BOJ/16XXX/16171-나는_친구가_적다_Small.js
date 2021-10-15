/**
 * ABOUT
 *
 * DATE: 2021-10-15
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/16171
 *
 * COMMENT:
 * 문자열에서 숫자를 제거해준 다음 키워드가 문자열에 있는지 확인한다
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
	let [S, K] = input;

	// 숫자 제거
	S = S.split('')
		.filter(el => isNaN(el))
		.join('');

	// 키워드가 문자열 내에 존재하는지 확인
	if (S.includes(K)) {
		console.log(1);
	} else {
		console.log(0);
	}

	process.exit();
});

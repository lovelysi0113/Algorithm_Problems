/**
 * ABOUT
 *
 * DATE: 2021-07-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2744
 *
 * COMMENT:
 * 문자 하나씩 검사하여 대문자는 소문자로, 소문자는 대문자로 바꾸어 출력한다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = '';

rl.on('line', function (line) {
	input = line;
}).on('close', function () {
	let answer = '';

	for (let idx = 0; idx < input.length; idx++) {
		let ch = input[idx];
		if (ch === ch.toUpperCase()) {
			// 대문자는 소문자로 바꾸어 출력
			answer += ch.toLowerCase();
		} else {
			// 소문자는 대문자로 바꾸어 출력
			answer += ch.toUpperCase();
		}
	}

	console.log(answer);

	process.exit();
});

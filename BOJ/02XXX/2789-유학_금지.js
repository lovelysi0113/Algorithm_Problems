/**
 * ABOUT
 *
 * DATE: 2021-07-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2789
 *
 * COMMENT:
 * 글자를 하나씩 검사하여 CAMBRIDGE에 포함된 알파벳은 모두 지운다
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
		// CAMBRIDGE에 포함된 알파벳은 모두 지우기
		if (!'CAMBRIDGE'.includes(ch)) {
			answer += ch;
		}
	}

	console.log(answer);

	process.exit();
});

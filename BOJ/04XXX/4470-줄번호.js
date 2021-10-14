/**
 * ABOUT
 *
 * DATE: 2021-10-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/4470
 *
 * COMMENT:
 * 각 문장 앞에 줄번호를 추가해준다
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
	let answer = [];

	input.slice(1).forEach((el, idx) => {
		answer.push(`${idx + 1}. ${el}`);
	});

	console.log(answer.join('\n'));

	process.exit();
});

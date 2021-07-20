/**
 * ABOUT
 *
 * DATE: 2021-07-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2441
 *
 * COMMENT:
 * 별 갯수를 하나씩 줄이고, 공백 갯수는 하나씩 늘려가며 출력한다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = 0;

rl.on('line', function (line) {
	input = parseInt(line);
}).on('close', function () {
	let answer = [];

	let star = '';
	for (let num = 1; num <= input; num++) {
		star += '*';
		answer.push(star);
	}
	answer.reverse();

	let space = '';
	for (let idx = 1; idx < input; idx++) {
		space += ' ';
		answer[idx] = space + answer[idx];
	}

	console.log(answer.join('\n'));

	process.exit();
});

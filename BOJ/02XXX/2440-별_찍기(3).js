/**
 * ABOUT
 *
 * DATE: 2021-07-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2440
 *
 * COMMENT:
 * 별 갯수를 1개씩 줄여가며 별을 출력한다
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

	console.log(answer.reverse().join('\n'));

	process.exit();
});

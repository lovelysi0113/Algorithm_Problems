/**
 * ABOUT
 *
 * DATE: 2021-08-01
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2754
 *
 * COMMENT:
 * 성적에 따라 평점이 몇 점인지 출력한다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input;

rl.on('line', function (line) {
	input = line;
}).on('close', function () {
	const score = {
		'A+': '4.3',
		A0: '4.0',
		'A-': '3.7',
		'B+': '3.3',
		B0: '3.0',
		'B-': '2.7',
		'C+': '2.3',
		C0: '2.0',
		'C-': '1.7',
		'D+': '1.3',
		D0: '1.0',
		'D-': '0.7',
		F: '0.0',
	};
	console.log(score[input]);

	process.exit();
});

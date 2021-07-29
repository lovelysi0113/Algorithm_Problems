/**
 * ABOUT
 *
 * DATE: 2021-07-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/11367
 *
 * COMMENT:
 * 점수를 확인하여 조건에 맞는 등급을 부여한다
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

	input.slice(1).forEach(el => {
		let [name, score] = el.split(' ');

		let grade = '';
		if (97 <= score && score <= 100) {
			grade = 'A+';
		} else if (90 <= score) {
			grade = 'A';
		} else if (87 <= score) {
			grade = 'B+';
		} else if (80 <= score) {
			grade = 'B';
		} else if (77 <= score) {
			grade = 'C+';
		} else if (70 <= score) {
			grade = 'C';
		} else if (67 <= score) {
			grade = 'D+';
		} else if (60 <= score) {
			grade = 'D';
		} else {
			grade = 'F';
		}

		answer.push(`${name} ${grade}`);
	});

	console.log(answer.join('\n'));

	process.exit();
});

/**
 * ABOUT
 *
 * DATE: 2021-10-09
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2139
 *
 * COMMENT:
 * 윤년을 고려하면서 1월 1일부터 해당 날짜까지 며칠인지 계산해준다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line.split(' ').map(el => parseInt(el)));
}).on('close', function () {
	const month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	const answer = [];

	input.slice(0, -1).forEach(([D, M, Y]) => {
		// 윤년인지 확인
		if (Y % 4 === 0 && (Y % 100 !== 0 || Y % 400 === 0)) {
			month[2] = 29;
		} else {
			month[2] = 28;
		}

		let totalDays = month.slice(0, M).reduce((sum, days) => sum + days, 0) + D;

		answer.push(totalDays);
	});

	console.log(answer.join('\n'));

	process.exit();
});

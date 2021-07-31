/**
 * ABOUT
 *
 * DATE: 2021-07-31
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1924
 *
 * COMMENT:
 * 1월 1일부터 x월 y일까지 총 몇 일 있는지 계산하고 7로 나누어 그날의 요일을 구해준다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input;

rl.on('line', function (line) {
	input = line.split(' ').map(el => parseInt(el));
}).on('close', function () {
	const month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	let day = input[1];
	for (let idx = 1; idx < input[0]; idx++) {
		day += month[idx];
	}

	const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	console.log(week[day % 7]);

	process.exit();
});

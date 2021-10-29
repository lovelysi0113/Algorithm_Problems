/**
 * ABOUT
 *
 * DATE: 2021-10-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/10162
 *
 * COMMENT:
 * 버튼 A, B, C 순으로 누르며 T초를 맞춘다
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
	if (input % 10 !== 0) {
		// 3개의 버튼으로 T초를 맞출 수 없는 경우
		console.log(-1);
	} else {
		let button = [300, 60, 10];
		let press = [];

		// 버튼 A, B, C 순으로 누르기
		button.forEach(time => {
			press.push(parseInt(input / time));
			input = input % time;
		});

		console.log(press.join(' '));
	}

	process.exit();
});

/**
 * ABOUT
 *
 * DATE: 2021-10-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2947
 *
 * COMMENT:
 * 위치를 바꿀 때마다 조각의 순서를 출력해준다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input = line.split(' ').map(el => parseInt(el));
}).on('close', function () {
	let answer = [];

	let isChanged = true;

	while (isChanged) {
		isChanged = false;
		for (let idx = 0; idx < 4; idx++) {
			if (input[idx] > input[idx + 1]) {
				[input[idx], input[idx + 1]] = [input[idx + 1], input[idx]];
				answer.push(input.join(' '));
				isChanged = true;
			}
		}
	}

	console.log(answer.join('\n'));

	process.exit();
});

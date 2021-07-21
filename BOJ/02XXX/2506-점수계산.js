/**
 * ABOUT
 *
 * DATE: 2021-07-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2506
 *
 * COMMENT:
 * 채점 결과에서 처음부터 하나씩 검사하며 1의 갯수를 세어서 점수에 더해준다
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
	let score = 0;
	let one = 0;

	input[1].split(' ').forEach(num => {
		if (num === '0') {
			one = 0;
		} else {
			one += 1;
			score += one;
		}
	});

	console.log(score);

	process.exit();
});

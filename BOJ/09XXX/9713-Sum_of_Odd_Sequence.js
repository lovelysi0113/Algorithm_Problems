/**
 * ABOUT
 *
 * DATE: 2021-07-27
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/9713
 *
 * COMMENT:
 * 1부터 홀수 N까지의 합은 N이 n번째 홀수라고 할 때, n * n으로 구할 수 있다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(parseInt(line));
}).on('close', function () {
	let answer = [];

	input.slice(1).forEach(num => {
		let cnt = Math.floor(num / 2) + 1;
		answer.push(cnt * cnt);
	});

	console.log(answer.join('\n'));

	process.exit();
});

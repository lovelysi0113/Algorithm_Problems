/**
 * ABOUT
 *
 * DATE: 2021-10-15
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/4562
 *
 * COMMENT:
 * 좀비가 먹는 뇌의 수와 좀비가 생존하기 위해 필요한 뇌의 수를 비교한다
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
		let [X, Y] = el.split(' ').map(el => parseInt(el));
		if (X >= Y) {
			answer.push('MMM BRAINS');
		} else {
			answer.push('NO BRAINS');
		}
	});

	console.log(answer.join('\n'));

	process.exit();
});

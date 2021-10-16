/**
 * ABOUT
 *
 * DATE: 2021-10-17
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/18247
 *
 * COMMENT:
 * L4 자리가 존재하기 위해서는 N이 최소 13, M이 최소 4 이상이어야 한다
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
		let [N, M] = el.split(' ').map(el => parseInt(el));
		if (N < 12 || M < 4) {
			answer.push(-1);
		} else {
			let sitNum = M * 11 + 4;
			answer.push(sitNum);
		}
	});

	console.log(answer.join('\n'));

	process.exit();
});

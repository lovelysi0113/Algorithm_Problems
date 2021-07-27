/**
 * ABOUT
 *
 * DATE: 2021-07-27
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/7891
 *
 * COMMENT:
 * 두 수의 합을 구해준다
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
		let [a, b] = el.split(' ').map(el => parseInt(el));
		answer.push(a + b);
	});

	console.log(answer.join('\n'));

	process.exit();
});

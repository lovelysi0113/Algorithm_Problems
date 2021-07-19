/**
 * ABOUT
 *
 * DATE: 2021-07-19
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1864
 *
 * COMMENT:
 * 문자 하나씩 각각 어떤 숫자인지 찾아서 계산하면 된다
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
	const octopus = { '-': 0, '\\': 1, '(': 2, '@': 3, '?': 4, '>': 5, '&': 6, '%': 7, '/': -1 };

	let answer = [];

	input.slice(0, -1).forEach(el => {
		let result = 0;
		for (let idx = 0; idx < el.length; idx++) {
			result *= 8;
			result += octopus[el[idx]];
		}
		answer.push(result);
	});

	console.log(answer.join('\n'));

	process.exit();
});

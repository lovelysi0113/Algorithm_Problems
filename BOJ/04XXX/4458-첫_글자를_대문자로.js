/**
 * ABOUT
 *
 * DATE: 2021-10-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/4458
 *
 * COMMENT:
 * 모든 줄의 첫글자를 toUpperCase()를 사용하여 대문자로 바꾼다
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
		answer.push(el[0].toUpperCase() + el.slice(1));
	});

	console.log(answer.join('\n'));

	process.exit();
});

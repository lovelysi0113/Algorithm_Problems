/**
 * ABOUT
 *
 * DATE: 2021-07-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/11104
 *
 * COMMENT:
 * 주어진 수(2진수)를 10진수로 변환해서 출력한다
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

	input.slice(1).forEach(num => {
		let weight = 0;
		for (let idx = 0; idx < num.length; idx++) {
			weight = weight * 2 + parseInt(num[idx]);
		}
		answer.push(weight);
	});

	console.log(answer.join('\n'));

	process.exit();
});

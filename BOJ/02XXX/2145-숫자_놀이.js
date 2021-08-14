/**
 * ABOUT
 *
 * DATE: 2021-08-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2822
 *
 * COMMENT:
 * 숫자 각 자릿수를 더해 결과가 한 자릿수가 될 때까지 반복한다
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

	input.slice(0, -1).forEach(num => {
		// 결과가 한 자릿수가 될 때 까지 반복
		while (num >= 10) {
			let sum = 0;
			// 주어진 숫자의 각 자릿수를 더한다
			while (num > 0) {
				sum += num % 10;
				num = parseInt(num / 10);
			}
			num = sum;
		}
		answer.push(num);
	});

	console.log(answer.join('\n'));

	process.exit();
});

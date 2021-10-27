/**
 * ABOUT
 *
 * DATE: 2021-10-27
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/3460
 *
 * COMMENT:
 * 각 수를 2로 나누면서 이진수로 변환한 후 1의 위치를 모두 출력해준다
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
		let result = [];
		let idx = -1;
		while (num > 0) {
			idx += 1;
			if (num % 2 === 1) {
				result.push(idx);
			}
			num = parseInt(num / 2);
		}
		answer.push(result.join(' '));
	});

	console.log(answer.join('\n'));

	process.exit();
});

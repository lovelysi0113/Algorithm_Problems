/**
 * ABOUT
 *
 * DATE: 2021-07-27
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/4101
 *
 * COMMENT:
 * 두 수를 비교해서 Yes 또는 No를 출력한다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line.split(' ').map(el => parseInt(el)));
}).on('close', function () {
	let answer = [];

	input.slice(0, -1).forEach(([a, b]) => {
		if (a > b) {
			// 첫 번째 수가 두 번째 수보다 크면 Yes
			answer.push('Yes');
		} else {
			// 첫 번째 수가 두 번째 수보다 같거나 작으면 No
			answer.push('No');
		}
	});

	console.log(answer.join('\n'));

	process.exit();
});

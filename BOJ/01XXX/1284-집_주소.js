/**
 * ABOUT
 *
 * DATE: 2021-07-16
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1284
 *
 * COMMENT:
 * 호수를 한자리씩 검사하며 각 자리수가 차지하는 너비를 더해준다
 * 호수의 양 옆(경계), 숫자 사이의 여백도 잊지않고 추가해준다
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
	input.pop();
	input.forEach(num => {
		let home = 1;

		while (num > 0) {
			let now = num % 10;
			if (now === 0) {
				home += 4;
			} else if (now === 1) {
				home += 2;
			} else {
				home += 3;
			}
			num = parseInt(num / 10);
			home += 1;
		}

		console.log(home);
	});

	process.exit();
});

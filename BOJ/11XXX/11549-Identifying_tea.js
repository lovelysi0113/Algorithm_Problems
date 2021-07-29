/**
 * ABOUT
 *
 * DATE: 2021-07-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/11549
 *
 * COMMENT:
 * 한 명씩 검사하며 올바른 tea를 말했는지 확인한다
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
	let tea = parseInt(input[0]);

	let answer = 0;
	input[1].split(' ').forEach(el => {
		if (tea === parseInt(el)) {
			answer += 1;
		}
	});

	console.log(answer);

	process.exit();
});

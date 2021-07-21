/**
 * ABOUT
 *
 * DATE: 2021-07-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/3449
 *
 * COMMENT:
 * 두 수를 한 자리씩 비교하며 다른 자릿수의 갯수를 세어준다
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
	let testcase = parseInt(input[0]);

	let answer = [];
	for (let test = 0; test < testcase; test++) {
		let a = input[1 + test * 2];
		let b = input[2 + test * 2];
		let cnt = 0;
		for (let idx = 0; idx < a.length; idx++) {
			// 자릿수 비교
			if (a[idx] !== b[idx]) {
				cnt += 1;
			}
		}
		answer.push(`Hamming distance is ${cnt}.`);
	}

	console.log(answer.join('\n'));

	process.exit();
});

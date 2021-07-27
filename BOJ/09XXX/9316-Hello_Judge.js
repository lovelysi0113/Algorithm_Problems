/**
 * ABOUT
 *
 * DATE: 2021-07-27
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/9316
 *
 * COMMENT:
 * for문을 돌면서 1부터 N까지 같은 문장을 출력해준다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = 0;

rl.on('line', function (line) {
	input = parseInt(line);
}).on('close', function () {
	for (let num = 1; num <= input; num++) {
		console.log(`Hello World, Judge ${num}!`);
	}

	process.exit();
});

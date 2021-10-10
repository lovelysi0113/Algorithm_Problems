/**
 * ABOUT
 *
 * DATE: 2021-10-10
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2747
 *
 * COMMENT:
 * Fibo[n] = Fibo[n-1] + Fibo[n-2] 를 이용하여 n번째 피보나치 수를 구한다
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
	let fibo = new Array(input + 1).fill(0);
	fibo[1] = 1;

	for (let idx = 2; idx <= input; idx++) {
		fibo[idx] = fibo[idx - 1] + fibo[idx - 2];
	}

	console.log(fibo[input]);

	process.exit();
});

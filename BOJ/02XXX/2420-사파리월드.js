/**
 * ABOUT
 *
 * DATE: 2021-06-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2420
 *
 * COMMENT:
 * abs() 함수를 사용하여 절대값을 구할 수 있다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input = line.split(' ').map(el => parseInt(el));
}).on('close', function () {
	let [N, M] = input;
	console.log(Math.abs(N - M));

	process.exit();
});

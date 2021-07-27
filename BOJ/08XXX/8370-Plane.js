/**
 * ABOUT
 *
 * DATE: 2021-07-27
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/8370
 *
 * COMMENT:
 * 모든 좌석의 합을 구하기 위해 열 * 좌석을 해주면 된다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input;

rl.on('line', function (line) {
	input = line.split(' ').map(el => parseInt(el));
}).on('close', function () {
	let [n1, k1, n2, k2] = input;

	console.log(n1 * k1 + n2 * k2);

	process.exit();
});

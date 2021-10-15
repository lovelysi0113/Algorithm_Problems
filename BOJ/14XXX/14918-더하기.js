/**
 * ABOUT
 *
 * DATE: 2021-10-15
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/14918
 *
 * COMMENT:
 * a + b을 출력한다
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
	let [a, b] = input;

	console.log(a + b);

	process.exit();
});

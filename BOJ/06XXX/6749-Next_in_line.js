/**
 * ABOUT
 *
 * DATE: 2021-07-27
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/6749
 *
 * COMMENT:
 * 세 자식들의 나이 차는 같다
 * 따라서 첫째 자식의 나이를 구하기 위해서는
 * 둘째 자식의 나이에 둘째와 셋째의 나이 차를 더하면 된다
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
	let Y = input[0];
	let M = input[1];

	console.log(M + (M - Y));

	process.exit();
});

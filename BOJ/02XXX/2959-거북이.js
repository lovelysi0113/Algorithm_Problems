/**
 * ABOUT
 *
 * DATE: 2021-07-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2959
 *
 * COMMENT:
 * A <= B <= C <= D 일때, 거북이가 만들 수 있는 가장 큰 직사각형의 넓이는 A * C 이다
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
	input.sort((a, b) => a - b);

	console.log(input[0] * input[2]);

	process.exit();
});

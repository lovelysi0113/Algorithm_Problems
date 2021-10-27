/**
 * ABOUT
 *
 * DATE: 2021-10-27
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2587
 *
 * COMMENT:
 * 다섯개 수의 평균을 구해주고 오름차순으로 정렬하여 중앙값을 찾는다
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
	// 평균
	let answer = input.reduce((sum, num) => sum + num, 0) / input.length;
	console.log(answer);

	// 중앙값
	input.sort((a, b) => a - b);
	console.log(input[2]);

	process.exit();
});

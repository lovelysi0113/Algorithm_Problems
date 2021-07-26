/**
 * ABOUT
 *
 * DATE: 2021-07-26
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1427
 *
 * COMMENT:
 * 수의 각 자리수를 분리한 후, 내림차순으로 정렬한다
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
	let nums = [];

	// 자릿수 분리
	while (input > 0) {
		nums.push(input % 10);
		input = Math.floor(input / 10);
	}

	// 자릿수를 내림차순으로 정렬
	nums.sort((a, b) => b - a);

	console.log(nums.join(''));

	process.exit();
});

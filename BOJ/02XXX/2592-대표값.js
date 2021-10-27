/**
 * ABOUT
 *
 * DATE: 2021-10-27
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2592
 *
 * COMMENT:
 * 10개의 자연수의 평균을 구하고 각 수의 갯수를 세어 최빈값을 구한다
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

	// 최빈값
	let count = {};
	input.forEach(num => {
		if (count[num] === undefined) {
			count[num] = 0;
		}
		count[num] += 1;
	});

	let many = [0, 0];
	Object.keys(count).forEach(num => {
		if (many[0] < count[num]) {
			many = [count[num], num];
		}
	});

	console.log(many[1]);

	process.exit();
});

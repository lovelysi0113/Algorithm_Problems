/**
 * ABOUT
 *
 * DATE: 2025-05-16
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181944
 *
 * COMMENT:
 * 2로 나눈 나머지로 홀수 / 짝수를 구분한다
 **/

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input = line.split(' ');
}).on('close', function () {
	const n = Number(input[0]);

	if (n % 2 === 0) {
		console.log(`${n} is even`);
	} else {
		console.log(`${n} is odd`);
	}
});

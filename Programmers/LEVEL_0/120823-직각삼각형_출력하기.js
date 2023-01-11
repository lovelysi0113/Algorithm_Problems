/**
 * ABOUT
 *
 * DATE: 2023-01-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120823
 *
 * COMMENT:
 * 별을 1개씩 증가시키며 출력해준다
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
	let n = Number(input[0]);

	let star = '';
	let count = 0;

	while (count < n) {
		star += '*';
		console.log(star);
		count++;
	}
});

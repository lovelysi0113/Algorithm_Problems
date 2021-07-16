/**
 * ABOUT
 *
 * DATE: 2021-07-16
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1568
 *
 * COMMENT:
 * 1초마다 현재 불러야 하는 수(k)와 새의 수를 비교하고
 * 만약 k가 새의 수보다 많으면 k를 1로 변경해주었다
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
	let time = 0;
	let k = 1;
	let bird = input;

	while (bird > 0) {
		time += 1;
		if (k > bird) {
			k = 1;
		}
		bird -= k;
		k += 1;
	}

	console.log(time);

	process.exit();
});

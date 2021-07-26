/**
 * ABOUT
 *
 * DATE: 2021-07-26
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1233
 *
 * COMMENT:
 * 3개의 주사위로 나올 수 있는 수의 합을 구하고 거기서 가장 많이 발생하는 합을 찾는다
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
	let dice = Array(input[0] + input[1] + input[2] + 1).fill(0);

	// 3개의 주사위를 던져서 눈의 합 구하기
	for (let s1 = 1; s1 <= input[0]; s1++) {
		for (let s2 = 1; s2 <= input[1]; s2++) {
			for (let s3 = 1; s3 <= input[2]; s3++) {
				dice[s1 + s2 + s3] += 1;
			}
		}
	}

	// 가장 많이 발생하는 합을 구하기
	let max = Math.max(...dice);
	console.log(dice.indexOf(max));

	process.exit();
});

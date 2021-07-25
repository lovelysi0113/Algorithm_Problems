/**
 * ABOUT
 *
 * DATE: 2021-07-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1026
 *
 * COMMENT:
 * S = A[0]×B[0] + ... + A[N-1]×B[N-1]의 최솟값을 구하기 위해서는
 * A의 최댓값과 B의 최솟값을 곱해주면 된다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let A = input[1].split(' ').map(el => parseInt(el));
	A.sort((a, b) => a - b);
	let B = input[2].split(' ').map(el => parseInt(el));
	B.sort((a, b) => b - a);

	let answer = 0;
	for (let idx = 0; idx < parseInt(input[0]); idx++) {
		answer += A[idx] * B[idx];
	}

	console.log(answer);

	process.exit();
});

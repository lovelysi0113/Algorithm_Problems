/**
 * ABOUT
 *
 * DATE: 2021-07-23
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/14920
 *
 * COMMENT:
 * 문제에 맞게 계속 수열을 구해주면서 C(n)이 처음으로 1이 되는 n을 찾는다
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
	let C = [0, input];
	let n = 1;

	while (C[n] !== 1) {
		if (C[n] % 2 === 0) {
			// C(n+1) = C(n)/2     (C(n)이 짝수일 때)
			C[n + 1] = C[n] / 2;
		} else {
			// C(n+1) = 3*C(n)+1   (C(n)이 홀수일 때)
			C[n + 1] = C[n] * 3 + 1;
		}
		n += 1;
	}

	console.log(n);

	process.exit();
});

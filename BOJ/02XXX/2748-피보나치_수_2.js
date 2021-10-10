/**
 * ABOUT
 *
 * DATE: 2021-10-10
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2748
 *
 * COMMENT:
 * Fibo[n] = Fibo[n-1] + Fibo[n-2] 를 이용하여 n번째 피보나치 수를 구한다
 * 이때 n의 범위는 90인데 90번째 피보나치 수는 int 범위를 벗어나는 큰 수이므로
 * BigInt()를 사용하여 값을 구해준다
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
	let fibo = new Array(input + 1).fill(BigInt(0));
	fibo[1] = BigInt(1);

	for (let idx = 2; idx <= input; idx++) {
		fibo[idx] = fibo[idx - 1] + fibo[idx - 2];
	}

	console.log(fibo[input].toString());

	process.exit();
});

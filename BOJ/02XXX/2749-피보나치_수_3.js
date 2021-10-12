/**
 * ABOUT
 *
 * DATE: 2021-10-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2749
 *
 * COMMENT:
 * Fibo[n] = Fibo[n-1] + Fibo[n-2] 를 이용하여 n번째 피보나치 수를 구한다
 * 피사노 주기를 사용하여 큰 수에 대한 피보나치 수를 구할 수 있다
 * 피사노 주기: 피보나치 수를 나눈 나머지들은 반드시 주기를 가진다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = 0;

rl.on('line', function (line) {
	input = BigInt(line);
}).on('close', function () {
	let fibo = new Array(1500001).fill(BigInt(0));
	fibo[1] = BigInt(1);

	for (let idx = 2; idx <= 1500000; idx++) {
		fibo[idx] = (fibo[idx - 1] + fibo[idx - 2]) % BigInt(1000000);
	}

	console.log(fibo[input % BigInt(1500000)].toString());

	process.exit();
});

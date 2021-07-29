/**
 * ABOUT
 *
 * DATE: 2021-07-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2355
 *
 * COMMENT:
 * 연속된 수의 합을 구하는 공식을 사용하여 A~B 사이의 수의 합을 구해준다
 * 1~n까지의 수의 합 = (1 + n) * n / 2
 * (for문을 사용해서 일일이 더해주는 방식은 시간초과가 난다)
 * 수의 범위가 크므로 BigInt()를 사용하여 구해준다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input = line.split(' ').map(el => parseInt(el));
}).on('close', function () {
	input.sort((a, b) => a - b);
	let [A, B] = input;

	let sum = BigInt(((A + B) * (B - A + 1)) / 2);

	console.log(sum.toString());

	process.exit();
});

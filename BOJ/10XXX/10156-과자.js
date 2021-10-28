/**
 * ABOUT
 *
 * DATE: 2021-10-28
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/10156
 *
 * COMMENT:
 * 과자를 사기위해 필요한 총 금액을 구한 후 동수가 가진 돈과의 차액을 구한다
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
	let [K, N, M] = input;

	// 부모님께 받아야 하는 돈의 액수
	let money = K * N - M;

	console.log(money <= 0 ? 0 : money);

	process.exit();
});

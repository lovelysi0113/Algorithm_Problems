/**
 * ABOUT
 *
 * DATE: 2021-10-27
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1292
 *
 * COMMENT:
 * A번째 숫자가 무엇인지 찾은 후에 A번째 숫자부터 B번째 숫자까지 합을 구한다
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
	let [A, B] = input;

	// A번째 숫자 찾기
	let num = 1;
	let total = 1;
	while (total < A) {
		num += 1;
		total += num;
	}

	// A번째 숫자부터 B번째 숫자까지 합 구하기
	let idx = A - 1;
	let sum = 0;
	while (idx <= B) {
		if (total > B) {
			sum += (B - idx) * num;
		} else {
			sum += (total - idx) * num;
		}
		idx = total;
		num += 1;
		total += num;
	}

	console.log(sum);

	process.exit();
});

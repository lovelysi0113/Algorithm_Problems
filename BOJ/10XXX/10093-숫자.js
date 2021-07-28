/**
 * ABOUT
 *
 * DATE: 2021-07-28
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/10093
 *
 * COMMENT:
 * for문으로 두 수 사이에 있는 정수를 모두 출력해준다
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
	input.sort((a, b) => a - b);
	let [A, B] = input;

	let nums = [];
	for (let num = A + 1; num < B; num++) {
		nums.push(num);
	}

	console.log(nums.length);
	console.log(nums.join(' '));

	process.exit();
});

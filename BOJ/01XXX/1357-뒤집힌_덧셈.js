/**
 * ABOUT
 *
 * DATE: 2021-10-13
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1357
 *
 * COMMENT:
 * 모든 자리수가 역순이 된 수를 구하는 함수 Rev를 만든 후 Rev(Rev(X) + Rev(Y))를 구한다
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
	const Rev = num => {
		let reverse = 0;
		while (num > 0) {
			reverse = reverse * 10 + (num % 10);
			num = parseInt(num / 10);
		}
		return reverse;
	};

	let [X, Y] = input;
	console.log(Rev(Rev(X) + Rev(Y)));

	process.exit();
});

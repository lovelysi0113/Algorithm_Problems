/**
 * ABOUT
 *
 * DATE: 2021-08-01
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2576
 *
 * COMMENT:
 * 수를 하나씩 비교하여 홀수인지 확인한다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(parseInt(line));
}).on('close', function () {
	let odd = input.filter(num => num % 2 !== 0);

	if (odd.length === 0) {
		console.log(-1);
	} else {
		console.log(odd.reduce((sum, num) => sum + num, 0));
		console.log(Math.min(...odd));
	}

	process.exit();
});

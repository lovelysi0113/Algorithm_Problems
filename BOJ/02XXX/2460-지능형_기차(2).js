/**
 * ABOUT
 *
 * DATE: 2021-07-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2460
 *
 * COMMENT:
 * 각 역마다 기차에서 내리는 수, 타는 수를 계산하여 현재 기차에 몇명 있는지 체크한다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line.split(' ').map(el => parseInt(el)));
}).on('close', function () {
	let maxNum = 0;
	let train = 0;

	input.forEach(([out, enter]) => {
		train += enter - out;
		maxNum = Math.max(maxNum, train);
	});

	console.log(maxNum);

	process.exit();
});

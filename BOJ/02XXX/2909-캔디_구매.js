/**
 * ABOUT
 *
 * DATE: 2021-10-23
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2909
 *
 * COMMENT:
 * 지불해야할 금액에서 지폐 액면가로 나눈 나머지를 반올림해준다
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
	let [C, K] = input;

	let money = 1;
	while (K > 0) {
		money *= 10;
		K -= 1;
	}

	let result = parseInt(C / money) * money + Math.round((C % money) / money) * money;

	console.log(result);

	process.exit();
});

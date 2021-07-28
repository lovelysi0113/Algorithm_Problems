/**
 * ABOUT
 *
 * DATE: 2021-07-28
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/10817
 *
 * COMMENT:
 * 세 수를 오름차순 정렬을 한 후, 가운데 수를 출력해준다
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

	console.log(input[1]);

	process.exit();
});

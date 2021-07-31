/**
 * ABOUT
 *
 * DATE: 2021-08-01
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2743
 *
 * COMMENT:
 * 단어의 길이를 출력한다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input;

rl.on('line', function (line) {
	input = line;
}).on('close', function () {
	console.log(input.length);

	process.exit();
});

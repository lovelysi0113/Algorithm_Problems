/**
 * ABOUT
 *
 * DATE: 2021-07-28
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/10926
 *
 * COMMENT:
 * 입력 받은 아이디 뒤에 놀람 표시인 '??!'를 붙여준다
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
	console.log(input + '??!');

	process.exit();
});

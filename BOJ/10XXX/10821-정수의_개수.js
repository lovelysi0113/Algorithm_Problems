/**
 * ABOUT
 *
 * DATE: 2021-07-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/10821
 *
 * COMMENT:
 * split() 함수를 사용하여 ','를 기준으로 문자열을 나눈 후 요소의 갯수를 세어준다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = '';

rl.on('line', function (line) {
	input = line;
}).on('close', function () {
	let answer = input.split(',');

	console.log(answer.length);

	process.exit();
});

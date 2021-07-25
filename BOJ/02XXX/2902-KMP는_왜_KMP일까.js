/**
 * ABOUT
 *
 * DATE: 2021-07-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2902
 *
 * COMMENT:
 * split() 함수를 사용하여 '-'를 기준으로 문자열을 나눈 후 이름들의 첫글자만 합해준다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = '';

rl.on('line', function (line) {
	input = line.split('-');
}).on('close', function () {
	let answer = '';

	input.forEach(el => (answer += el[0]));

	console.log(answer);

	process.exit();
});

/**
 * ABOUT
 *
 * DATE: 2025-05-16
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181945
 *
 * COMMENT:
 * split() 함수를 사용하여 글자를 하나씩 분리시킨다
 **/

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input = [line];
}).on('close', function () {
	const str = input[0];
	console.log(str.split('').join('\n'));
});

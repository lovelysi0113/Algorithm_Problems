/**
 * ABOUT
 *
 * DATE: 2025-05-16
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181951
 *
 * COMMENT:
 * 템플릿 리터럴을 사용하여 a와 b를 출력해준다
 **/

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input = line.split(' ');
}).on('close', function () {
	console.log('a = ' + Number(input[0]));
	console.log('b = ' + Number(input[1]));
});

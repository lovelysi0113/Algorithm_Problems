/**
 * ABOUT
 *
 * DATE: 2025-05-16
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181952
 *
 * COMMENT:
 * trim() 함수를 사용하여 앞 뒤 공백을 제거해준다
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
	console.log(input[0].trim());
});

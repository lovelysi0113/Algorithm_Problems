/**
 * ABOUT
 *
 * DATE: 2025-05-16
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181950
 *
 * COMMENT:
 * new Array()와 fill() 함수를 사용하여 원하는 길이의 배열을 만들 수 있다
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
	const str = input[0];
	const n = Number(input[1]);

	const strArray = new Array(n).fill(str);
	console.log(strArray.join(''));
});

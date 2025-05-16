/**
 * ABOUT
 *
 * DATE: 2025-05-16
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181949
 *
 * COMMENT:
 * 문자열을 소문자로 변경한 후 기존과 같은지 비교하여 대소문자 구분을 해준다
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
	const strArray = input[0].split('');
	const result = strArray.map(char => {
		const lowerCase = char.toLowerCase();
		return char === lowerCase ? char.toUpperCase() : lowerCase;
	});
	console.log(result.join(''));
});

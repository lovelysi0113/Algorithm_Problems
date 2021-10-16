/**
 * ABOUT
 *
 * DATE: 2021-10-17
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2998
 *
 * COMMENT:
 * 수 길이가 3의 배수가 될때까지 '0'을 붙이고 3개씩 잘라서 8진수로 변환한다
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
	const Eight = { '000': '0', '001': '1', '010': '2', '011': '3', 100: '4', 101: '5', 110: '6', 111: '7' };

	while (input.length % 3 !== 0) {
		input = '0' + input;
	}

	let answer = '';

	while (input.length > 0) {
		let num = input.slice(0, 3);
		answer += Eight[num];
		input = input.slice(3);
	}

	console.log(answer);

	process.exit();
});

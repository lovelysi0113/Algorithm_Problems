/**
 * ABOUT
 *
 * DATE: 2021-07-26
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1076
 *
 * COMMENT:
 * 처음 색 2개는 저항의 값으로 마지막 색은 pow() 함수를 사용하여 곱해야 하는 값으로 계산해준다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	const color = { black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, grey: 8, white: 9 };

	// 처음 색 2개는 저항의 값이고, 마지막 색은 곱해야 하는 값
	let answer = (color[input[0]] * 10 + color[input[1]]) * Math.pow(10, color[input[2]]);
	console.log(answer);

	process.exit();
});

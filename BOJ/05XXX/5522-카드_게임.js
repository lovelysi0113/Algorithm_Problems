/**
 * ABOUT
 *
 * DATE: 2021-10-26
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/5522
 *
 * COMMENT:
 * 게임의 득점들을 더해서 총점을 구해준다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(parseInt(line));
}).on('close', function () {
	let answer = input.reduce((sum, score) => sum + score, 0);

	console.log(answer);

	process.exit();
});

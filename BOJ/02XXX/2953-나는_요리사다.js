/**
 * ABOUT
 *
 * DATE: 2021-10-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2953
 *
 * COMMENT:
 * 각 참가자들의 총 점수를 구한 후 그 중에서 가장 높은 점수를 얻은 참가자(=우승자)를 찾는다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line.split(' ').map(el => parseInt(el)));
}).on('close', function () {
	let answer = [0, 0];

	input.forEach((el, idx) => {
		let score = el.reduce((sum, num) => sum + num, 0);
		if (score > answer[1]) {
			answer = [idx + 1, score];
		}
	});

	console.log(answer.join(' '));

	process.exit();
});

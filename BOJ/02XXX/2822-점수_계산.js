/**
 * ABOUT
 *
 * DATE: 2021-08-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2822
 *
 * COMMENT:
 * 8개의 점수를 내림차순으로 나열한 후 상위 5개를 출력한다
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
	let score = input.map((el, idx) => [el, idx]);

	// 점수를 내림차순으로 정렬
	score.sort((a, b) => b[0] - a[0]);

	// 참가자의 총 점수는 가장 높은 점수 5개의 합
	let maxScore = score.slice(0, 5);

	// 참가자의 총점 출력
	console.log(maxScore.reduce((sum, el) => sum + el[0], 0));

	// 어떤 문제가 최종 점수에 포함되는지를 공백으로 구분하여 출력
	maxScore.sort((a, b) => a[1] - b[1]);
	console.log(maxScore.map(el => el[1] + 1).join(' '));

	process.exit();
});

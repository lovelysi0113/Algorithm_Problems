/**
 * ABOUT
 *
 * DATE: 2021-10-28
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/10039
 *
 * COMMENT:
 * 보충학습을 듣는 사람들의 점수를 40점으로 변경한 후 5명의 평군 점수를 구한다
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
	// 보충학습 듣는 사람들의 점수 변경
	input = input.map(score => (score < 40 ? 40 : score));

	// 평균 점수 구하기
	let answer = input.reduce((sum, score) => sum + score, 0) / 5;
	console.log(answer);

	process.exit();
});

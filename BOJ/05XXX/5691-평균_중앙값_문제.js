/**
 * ABOUT
 *
 * DATE: 2021-10-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/5691
 *
 * COMMENT:
 * A, B, C의 평균과 중앙값을 같게 만드는 가장 작은 정수 C를 찾기 위해선
 * C, A, B로 A가 평균값이자 중앙값이 되는 C를 구하면 된다
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
	let answer = [];

	input.slice(0, -1).forEach(el => {
		let [A, B] = el;
		// C, A, B가 되는 C 값 찾기 (A = 평균값 = 중앙값)
		let C = A - (B - A);
		answer.push(C);
	});

	console.log(answer.join('\n'));

	process.exit();
});

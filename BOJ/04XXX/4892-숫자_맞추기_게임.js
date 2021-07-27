/**
 * ABOUT
 *
 * DATE: 2021-07-27
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/4892
 *
 * COMMENT:
 * 문제에 나온 순서대로 n1 ~ n4를 구해준다
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
	let answer = [];

	input.slice(0, -1).forEach((n0, tc) => {
		// n1 구하기
		let n1 = 3 * n0;
		// n2 구하기
		let n2;
		if (n1 % 2 === 0) {
			n2 = n1 / 2;
		} else {
			n2 = (n1 + 1) / 2;
		}
		// n3 구하기
		let n3 = 3 * n2;
		// n4 구하기
		let n4 = Math.floor(n3 / 9);

		// n1이 홀수인지 짝수인지와 n4를 출력
		answer.push(`${tc + 1}. ${n1 % 2 === 0 ? 'even' : 'odd'} ${n4}`);
	});

	console.log(answer.join('\n'));

	process.exit();
});

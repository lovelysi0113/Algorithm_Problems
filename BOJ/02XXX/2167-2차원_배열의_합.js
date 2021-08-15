/**
 * ABOUT
 *
 * DATE: 2021-08-15
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2167
 *
 * COMMENT:
 * (i, j) 위치부터 (x, y) 위치까지에 저장되어 있는 수들의 합을 구한다
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
	let [N, M] = input[0].split(' ').map(el => parseInt(el));

	// 2차원 배열
	let arr = input.slice(1, N + 1).map(el => el.split(' ').map(el => parseInt(el)));

	let answer = [];

	input.slice(N + 2).forEach(el => {
		let [i, j, x, y] = el.split(' ').map(el => parseInt(el));
		let result = 0;
		// (i, j) 위치부터 (x, y) 위치까지에 저장되어 있는 수들의 합을 구하기
		for (let row = i; row <= x; row++) {
			for (let col = j; col <= y; col++) {
				if (0 > row || row > N || 0 > col || col > M) {
					break;
				}
				result += arr[row - 1][col - 1];
			}
		}
		answer.push(result);
	});

	console.log(answer.join('\n'));

	process.exit();
});

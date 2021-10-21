/**
 * ABOUT
 *
 * DATE: 2021-10-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2798
 *
 * COMMENT:
 * 카드 3장의 모든 합을 구해서 그 중에서 M과 가장 가까운 합을 찾는다
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
	let [N, M] = input[0];

	let answer = [];

	for (let one = 0; one < N - 2; one++) {
		for (let two = one + 1; two < N - 1; two++) {
			for (let three = two + 1; three < N; three++) {
				let score = input[1][one] + input[1][two] + input[1][three];
				if (score <= M) {
					answer.push(score);
				}
			}
		}
	}

	answer.sort((a, b) => b - a);

	console.log(answer[0]);

	process.exit();
});

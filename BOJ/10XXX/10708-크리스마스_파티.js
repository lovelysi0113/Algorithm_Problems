/**
 * ABOUT
 *
 * DATE: 2021-07-23
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/10708
 *
 * COMMENT:
 * 문제에 나온 게임에 맞게 게임을 진행한 후에 모든 사람들의 점수를 출력하면 된다
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
	let N = parseInt(input[0]);
	let M = parseInt(input[1]);
	let target = input[2].split(' ').map(el => parseInt(el));

	let score = Array(N + 1).fill(0);
	input.slice(3).forEach((el, i) => {
		let now = target[i];
		let select = el.split(' ').map(el => parseInt(el));
		let wrong = 0;
		for (let num = 1; num <= N; num++) {
			if (select[num - 1] === now) {
				// 예상이 맞은 사람은 1점을 얻습니다
				score[num] += 1;
			} else {
				wrong += 1;
			}
		}
		// 예상이 빗나간 사람의 수가 X명일 경우, 타겟은 추가로 X점을 얻습니다
		score[now] += wrong;
	});

	console.log(score.slice(1).join('\n'));

	process.exit();
});

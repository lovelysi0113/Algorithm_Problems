/**
 * ABOUT
 *
 * DATE: 2021-07-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2484
 *
 * COMMENT:
 * 4개의 주사위 눈을 비교하여 규칙에 따라 상금을 주면 된다
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
	let max = 0;

	input.slice(1).forEach(dice => {
		dice = dice.split(' ').map(el => parseInt(el));
		dice.sort((a, b) => b - a);

		let score = 0;
		// 같은 눈이 4개가 나오면 50,000원+(같은 눈)×5,000원의 상금을 받게 된다
		if (dice[0] === dice[3]) {
			score = 50000 + dice[0] * 5000;
		}
		// 같은 눈이 3개만 나오면 10,000원+(3개가 나온 눈)×1,000원의 상금을 받게 된다
		else if (dice[0] === dice[2] || dice[1] === dice[3]) {
			score = 10000 + dice[1] * 1000;
		}
		// 같은 눈이 2개씩 두 쌍이 나오는 경우에는 2,000원+(2개가 나온 눈)×500원+(또 다른 2개가 나온 눈)×500원의 상금을 받게 된다
		else if (dice[0] === dice[1] && dice[2] === dice[3]) {
			score = 2000 + dice[0] * 500 + dice[2] * 500;
		}
		// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다
		else if (dice[0] === dice[1]) {
			score = 1000 + dice[0] * 100;
		} else if (dice[1] === dice[2]) {
			score = 1000 + dice[1] * 100;
		} else if (dice[2] === dice[3]) {
			score = 1000 + dice[2] * 100;
		}
		// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다
		else {
			score = dice[0] * 100;
		}

		max = Math.max(max, score);
	});

	console.log(max);

	process.exit();
});

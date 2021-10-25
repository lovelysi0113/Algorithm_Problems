/**
 * ABOUT
 *
 * DATE: 2021-10-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/20114
 *
 * COMMENT:
 * 각 글자마다 H * W 범위에서 ?가 아닌 다른 문자가 있는지 확인한다
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
	let [N, H, W] = input[0].split(' ').map(el => parseInt(el));
	let answer = Array(N).fill('?');

	let note = input.slice(1).map(el => el.split(''));

	for (let idx = 0; idx < N; idx++) {
		for (let x = 0; x < H; x++) {
			for (let y = idx * W; y < (idx + 1) * W; y++) {
				if (note[x][y] !== '?') {
					answer[idx] = note[x][y];
				}
			}
		}
	}

	console.log(answer.join(''));

	process.exit();
});

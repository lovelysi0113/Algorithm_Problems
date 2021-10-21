/**
 * ABOUT
 *
 * DATE: 2021-10-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2667
 *
 * COMMENT:
 * 지도를 처음부터 끝까지 돌면서 붙어있는 집들을 하나의 단지로 묶는다
 * [x, y] 구역이 집일 때 상하좌우에 집이 있는지 확인하면서 단지의 범위를 지정한다
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
	let apart = input.slice(1).map(el => el.split('').map(el => parseInt(el)));
	const DELTAS = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];

	let number = 2;

	// 집마다 번호 붙이기
	for (let x = 0; x < N; x++) {
		for (let y = 0; y < N; y++) {
			if (apart[x][y] === 1) {
				let queue = [[x, y]];
				while (queue.length > 0) {
					let [nowX, nowY] = queue.shift();
					apart[nowX][nowY] = number;
					DELTAS.forEach(([dx, dy]) => {
						let [chkX, chkY] = [nowX + dx, nowY + dy];
						if (0 <= chkX && chkX < N && 0 <= chkY && chkY < N && apart[chkX][chkY] === 1) {
							apart[chkX][chkY] = number;
							queue.push([chkX, chkY]);
						}
					});
				}
				number += 1;
			}
		}
	}

	// 번호별로 각각 몇 집이 있는지 계산하기
	let answer = new Array(number).fill(0);
	for (let x = 0; x < N; x++) {
		for (let y = 0; y < N; y++) {
			if (apart[x][y] !== 0) {
				answer[apart[x][y]] += 1;
			}
		}
	}

	// 오름차순 정렬
	answer.sort((a, b) => a - b);

	console.log(number - 2);
	console.log(answer.slice(2).join('\n'));

	process.exit();
});

/**
 * ABOUT
 *
 * DATE: 2021-08-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/14500
 *
 * COMMENT:
 * 가능한 모양의 테트로미노를 구한 후
 * 모든 맵을 돌면서 테트로미노를 놓아보면서 테트로미노가 놓인 칸에 쓰인 수들의 합의 최댓값을 구한다
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
	// 가능한 모양의 테트로미노
	const blocks = [
		[
			[0, 1],
			[0, 2],
			[0, 3],
		],
		[
			[1, 0],
			[2, 0],
			[3, 0],
		],
		[
			[1, 0],
			[1, 1],
			[1, 2],
		],
		[
			[0, 1],
			[1, 0],
			[2, 0],
		],
		[
			[0, 1],
			[0, 2],
			[1, 2],
		],
		[
			[1, 0],
			[2, 0],
			[2, -1],
		],
		[
			[0, 1],
			[0, 2],
			[-1, 2],
		],
		[
			[1, 0],
			[2, 0],
			[2, 1],
		],
		[
			[0, 1],
			[0, 2],
			[1, 0],
		],
		[
			[0, 1],
			[1, 1],
			[2, 1],
		],
		[
			[0, 1],
			[1, 0],
			[1, 1],
		],
		[
			[0, 1],
			[-1, 1],
			[-1, 2],
		],
		[
			[1, 0],
			[1, 1],
			[2, 1],
		],
		[
			[0, 1],
			[1, 1],
			[1, 2],
		],
		[
			[1, 0],
			[1, -1],
			[2, -1],
		],
		[
			[0, 1],
			[0, 2],
			[-1, 1],
		],
		[
			[0, 1],
			[0, 2],
			[1, 1],
		],
		[
			[1, 0],
			[2, 0],
			[1, 1],
		],
		[
			[1, 0],
			[2, 0],
			[1, -1],
		],
	];

	let [N, M] = input[0];
	let map = input.slice(1);

	let answer = 0;

	// 모든 맵을 돌면서 테트로미노 놓기
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			blocks.forEach(block => {
				let isRight = true;
				let chkSum = map[i][j];
				for (let k = 0; k < block.length; k++) {
					let [x, y] = [i + block[k][0], j + block[k][1]];
					if (0 <= x && x < N && 0 <= y && y < M) {
						chkSum += map[x][y];
					} else {
						isRight = false;
						break;
					}
				}
				if (isRight) {
					// 테트로미노가 놓인 칸에 쓰인 수들의 합의 최댓값 찾기
					answer = Math.max(answer, chkSum);
				}
			});
		}
	}

	console.log(answer);

	process.exit();
});

/**
 * ABOUT
 *
 * DATE: 2021-08-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/16235
 *
 * COMMENT:
 * 문제에 나온 방식으로 1년마다 나무의 나이를 더해주고, 나무를 심고, 양분을 뿌려준다
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
	let [N, M, K] = input[0];
	let A = input.slice(1, N + 1);

	// 가장 처음에 양분은 모든 칸에 5만큼 들어있다
	let ground = Array.from(Array(N), () => Array(N).fill(5));

	// M개의 나무를 구매해 땅에 심었다
	let trees = Array.from(Array(N), () =>
		Array(N)
			.fill(null)
			.map(() => Array()),
	);
	input.slice(N + 1).forEach(([x, y, age]) => {
		trees[x - 1][y - 1].push(age);
	});

	const DELTA = [
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, -1],
		[0, 1],
		[1, -1],
		[1, 0],
		[1, 1],
	];

	while (K > 0) {
		let newTrees = Array.from(Array(N), () => Array(N).fill(0));
		for (let i = 0; i < N; i++) {
			for (let j = 0; j < N; j++) {
				let temp = [];
				// 하나의 칸에 여러 개의 나무가 있다면, 나이가 어린 나무부터 양분을 먹는다
				trees[i][j].sort((a, b) => a - b);
				let dead = 0;
				for (let idx = 0; idx < trees[i][j].length; idx++) {
					let tree = trees[i][j][idx];
					if (tree <= ground[i][j]) {
						// 나무가 자신의 나이만큼 양분을 먹고, 나이가 1 증가
						ground[i][j] -= tree;
						temp.push(tree + 1);
						// 번식하는 나무는 나이가 5의 배수이어야 하며
						if ((tree + 1) % 5 === 0) {
							// 인접한 8개의 칸에 나이가 1인 나무가 생긴다
							DELTA.forEach(([dx, dy]) => {
								let [x, y] = [i + dx, j + dy];
								if (0 <= x && x < N && 0 <= y && y < N) {
									// 상도의 땅을 벗어나는 칸에는 나무가 생기지 않는다
									newTrees[x][y] += 1;
								}
							});
						}
					} else {
						// 땅에 양분이 부족해 자신의 나이만큼 양분을 먹을 수 없는 나무는 양분을 먹지 못하고 즉시 죽는다
						dead += Math.floor(tree / 2);
					}
				}
				trees[i][j] = temp;
				// 죽은 나무가 양분으로 변하게 된다
				// +  S2D2가 땅을 돌아다니면서 땅에 양분을 추가한다. 각 칸에 추가되는 양분의 양은 A[r][c]
				ground[i][j] += dead + A[i][j];
			}
		}
		for (let i = 0; i < N; i++) {
			for (let j = 0; j < N; j++) {
				for (let num = 0; num < newTrees[i][j]; num++) {
					trees[i][j].push(1);
				}
			}
		}
		// 1년이 지남
		K -= 1;
	}

	// K년이 지난 후 상도의 땅에 살아있는 나무의 개수 구하기
	let answer = trees.reduce((sum, el) => sum + el.reduce((sum, el) => sum + el.length, 0), 0);
	console.log(answer);

	process.exit();
});

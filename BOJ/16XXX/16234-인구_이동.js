/**
 * ABOUT
 *
 * DATE: 2021-08-10
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/16234
 *
 * COMMENT:
 * 인구 이동을 계속 진행하며 각 칸의 인구 수를 갱신해준다
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
	let [N, L, R] = input[0];
	let map = input.slice(1);

	const DELTAS = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];

	// bfs를 사용하여 인구 이동 진행
	const bfs = () => {
		// 방문한 칸 표시
		let visited = Array.from(Array(N), () => Array(N).fill(false));
		// 인구 이동이 진행되었는지 확인
		let isMoved = false;

		// 인구 이동 시작
		for (let x = 0; x < N; x++) {
			for (let y = 0; y < N; y++) {
				if (!visited[x][y]) {
					// 방문할 칸 저장
					let queue = [];
					queue.push([x, y]);
					visited[x][y] = true;
					// 국경선을 연 칸들의 목록 - 연합
					let open = [[x, y]];
					let total = map[x][y];
					while (queue.length > 0) {
						let [nx, ny] = queue.shift();
						// 인접한 칸과 인구 차이를 비교하여 L~R 사이면 국경선 열기
						DELTAS.forEach(([dx, dy]) => {
							let [chkx, chky] = [nx + dx, ny + dy];
							if (0 <= chkx && chkx < N && 0 <= chky && chky < N && !visited[chkx][chky]) {
								let differ = Math.abs(map[chkx][chky] - map[nx][ny]);
								if (L <= differ && differ <= R) {
									// 국경선 열기
									queue.push([chkx, chky]);
									open.push([chkx, chky]);
									visited[chkx][chky] = true;
									isMoved = true;
									total += map[chkx][chky];
								}
							}
						});
					}
					// 연합을 이루고 있는 각 칸의 인구수 변경
					open.forEach(([ox, oy]) => {
						map[ox][oy] = Math.floor(total / open.length);
					});
				}
			}
		}
		return isMoved;
	};

	// 인구 이동 계속 반복하기
	let moveCount = 0;
	while (true) {
		if (bfs()) {
			moveCount += 1;
		} else {
			break;
		}
	}

	console.log(moveCount);

	process.exit();
});

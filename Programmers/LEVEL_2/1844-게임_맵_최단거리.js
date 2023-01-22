/**
 * ABOUT
 *
 * DATE: 2021-04-07
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/1844
 *
 * COMMENT:
 * BFS를 이용한다
 * queue를 사용하여 앞으로 갈 수 있는 위치를 모두 확인한다
 **/

function solution(maps) {
	let n = maps.length;
	let m = maps[0].length;

	// 1X1 지도인 경우
	if (n === 1 && m === 1) {
		return 1;
	}

	const BLOCKED = 0;
	const DELTAS = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];
	let visited = [];
	for (let one = 0; one < n; one++) {
		let line = [];
		for (let two = 0; two < m; two++) {
			line.push(false);
		}
		visited.push(line);
	}

	let queue = [];
	queue.push([0, 0, 1]);

	while (queue.length > 0) {
		let [x, y, weight] = queue.shift();
		for (let idx = 0; idx < 4; idx++) {
			let nextX = x + DELTAS[idx][0];
			let nextY = y + DELTAS[idx][1];
			// 움직인 위치가 지도 안 범위인지 확인
			if (!is_valid(nextX, nextY, n, m)) {
				continue;
			}
			// 움직인 위치가 벽이거나 이미 방문한 곳이라면
			if (maps[nextX][nextY] === BLOCKED || visited[nextX][nextY]) {
				continue;
			}
			// 움직인 위치가 우측 하단에 도달했는지 확인
			if (nextX === n - 1 && nextY === m - 1) {
				return weight + 1;
			}
			// 움직인 위치 저장
			queue.push([nextX, nextY, weight + 1]);
			visited[nextX][nextY] = true;
		}
	}

	return -1;
}

const is_valid = (x, y, n, m) => {
	return 0 <= x && x < n && 0 <= y && y < m;
};

// **************************************************************************************************** //

/**
 * ABOUT
 *
 * DATE: 2023-01-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/1844
 *
 * COMMENT:
 * [ 깊이/너비 우선 탐색(DFS/BFS) ]
 * queue를 사용하여 앞으로 갈 수 있는 위치를 모두 확인한다
 **/

function solution(maps) {
	const n = maps.length;
	const m = maps[0].length;

	// 1X1 지도인 경우
	if (n === 1 && m === 1) {
		return 1;
	}

	// 맵 정의
	const BLOCKED = 0;
	const DELTAS = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];

	// 캐릭터가 맵을 벗어났는지 확인하는 함수
	const isValidPosition = (x, y, n, m) => {
		return 0 <= x && x < n && 0 <= y && y < m;
	};

	// 맵 초기화 (해당 칸을 방문했는지 체크하는 용도)
	let visited = [];
	for (let one = 0; one < n; one++) {
		let line = [];
		for (let two = 0; two < m; two++) {
			line.push(false);
		}
		visited.push(line);
	}

	let queue = [];
	queue.push([0, 0, 1]);

	while (queue.length > 0) {
		let [x, y, weight] = queue.shift();
		for (let idx = 0; idx < 4; idx++) {
			let nextX = x + DELTAS[idx][0];
			let nextY = y + DELTAS[idx][1];
			// 움직인 위치가 지도 안 범위인지 확인
			if (!isValidPosition(nextX, nextY, n, m)) {
				continue;
			}
			// 움직인 위치가 벽이거나 이미 방문한 곳이라면
			if (maps[nextX][nextY] === BLOCKED || visited[nextX][nextY]) {
				continue;
			}
			// 움직인 위치가 우측 하단에 도달했는지 확인
			if (nextX === n - 1 && nextY === m - 1) {
				return weight + 1;
			}
			queue.push([nextX, nextY, weight + 1]);
			visited[nextX][nextY] = true;
		}
	}

	return -1;
}

/**
 * ABOUT
 *
 * DATE: 2021-06-28
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/43162
 *
 * COMMENT:
 * [ 깊이/너비 우선 탐색(DFS/BFS) ]
 * 네트워크가 총 몇 개 있는지 확인하기 위해 BFS 탐색을 했다
 **/

function solution(n, computers) {
	let network = 0;

	// 방문한 컴퓨터를 표시하는 배열
	let visited = Array(n).fill(false);

	// 앞으로 방문할 컴퓨터 목록
	let queue = [];

	// 모든 컴퓨터 방문하기
	for (let idx = 0; idx < n; idx++) {
		if (!visited[idx]) {
			queue.push(idx);
			visited[idx] = true;
			while (queue.length) {
				// queue에 컴퓨터가 있음 -> 같은 네트워크 상에 있는 컴퓨터가 있음 -> 계속 탐색하기
				let now = queue.shift();
				computers[now].forEach((connect, next) => {
					if (connect === 1 && !visited[next]) {
						// 연결되어 있음 + 아직 방문하지 않음
						queue.push(next);
						visited[next] = true;
					}
				});
			}
			// 같은 네트워크에 있는 컴퓨터 모두 확인
			network += 1;
		}
	}
	return network;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-06-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/43162
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

function solution(n, computers) {
	// 방문한 컴퓨터 체크하는 배열
	let visited = Array(n).fill(false);

	// 0번 컴퓨터부터 확인
	let network = 0;
	for (let com = 0; com < n; com++) {
		if (!visited[com]) {
			// 네트워크 연결 시작
			network += 1;
			// 연결된 컴퓨터가 있는지 확인
			let stack = [com];
			while (stack.length > 0) {
				let now = stack.pop();
				visited[now] = true;
				computers[now].forEach((chk, next) => {
					if (chk === 1 && !visited[next]) {
						stack.push(next);
					}
				});
			}
		}
	}

	return network;
}

// **************************************************************************************************** //

/**
 * ABOUT
 *
 * DATE: 2023-01-28
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/43162
 *
 * COMMENT:
 * 알고리즘 스터디 공부를 위해 다시 한번 풀어보았다
 **/

function solution(n, computers) {
	const CONNECTED = 1;

	// 방문한 컴퓨터 체크하는 배열 초기화
	const visited = Array(n).fill(false);

	let network = 0; // 네트워크 수 저장

	// 0번 컴퓨터부터 확인
	for (let computer = 0; computer < n; computer++) {
		// 방문하지 않은 컴퓨터인지 확인
		if (!visited[computer]) {
			// 네트워크 연결 시작
			network += 1;

			// 연결된 다른 컴퓨터가 있는지 확인
			let stack = [computer];
			while (stack.length > 0) {
				let nowComputer = stack.pop();
				visited[nowComputer] = true;
				computers[nowComputer].forEach((status, nextComputer) => {
					if (status === CONNECTED && !visited[nextComputer]) {
						stack.push(nextComputer);
					}
				});
			}
		}
	}

	return network;
}

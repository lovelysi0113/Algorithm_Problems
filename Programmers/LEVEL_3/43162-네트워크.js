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

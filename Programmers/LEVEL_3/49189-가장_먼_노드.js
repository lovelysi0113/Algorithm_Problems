/**
 * ABOUT
 *
 * DATE: 2021-07-17
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/49189
 *
 * COMMENT:
 * [ 그래프 ]
 * 노드 1번부터 BFS 탐색을 하며 각 노드별로 1번 노드와의 거리를 구해준다
 * 그중에서 가장 멀리 떨어진 노드를 찾는다
 **/

function solution(n, edge) {
	let lines = {};
	edge.forEach(([a, b]) => {
		if (lines[a] === undefined) {
			lines[a] = [];
		}
		if (lines[b] === undefined) {
			lines[b] = [];
		}
		lines[a].push(b);
		lines[b].push(a);
	});

	let distance = Array(n + 1).fill(Infinity);
	distance[1] = 0;
	let visited = Array(n + 1).fill(false);

	let queue = [[1, 0]];
	while (queue.length > 0) {
		let [now, dist] = queue.shift();
		if (!visited[now]) {
			visited[now] = true;
			for (let idx = 0; idx < lines[now].length; idx++) {
				let next = lines[now][idx];
				if (next === 1) {
					distance[now] = 1;
					continue;
				}
				if (!visited[next]) {
					distance[next] = Math.min(distance[next], dist + 1);
					queue.push([next, distance[next]]);
				}
			}
		}
	}

	let max = Math.max(...distance.slice(1));
	return distance.filter(el => el === max).length;
}

/**
 * ABOUT
 *
 * DATE: 2021-06-13
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1260
 *
 * COMMENT:
 * 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하면 된다
 * DFS: 인접한 정점을 발견한 후, 해당 정점을 방문하지 않은 상태라면 그 정점을 바로 방문한다
 *      이를 반복하다 방문하지 않은 인접 정점이 더이상 없다면 뒤로 돌아감(재귀)
 * BFS: 현재 정점과 인접한 정점 중, 방문하지 않은 정점을 방문할 정점 배열(queue)에 저장한다
 *      그 후 queue에서 정점을 하나씩 뽑아 방문함
 * 여담으로 DFS, BFS 함수는 맞게 작성한 것 같은데 계속 오류가 나서 어디가 틀렸는지 계속 고민하고 있었는데
 * 알고보니 정점의 개수 N으로 그래프를 만들어야 하는데 계속 간선의 개수 M으로 만들고 있어서 TypeError가 나왔던 것이다..!
 * 그 부분만 수정하니 바로 통과..!ㅠㅠ 그전에 작성했던 코드들도 다 통과했다..
 * 다음부터는 변수 이름 실수하지 않도록 꼼꼼하게 코드를 작성해야겠다
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
	let [N, M, V] = input[0];

	// 그래프 그리기
	let graph = Array.from(Array(N + 1), () => []);
	input.slice(1).forEach(el => {
		let [a, b] = el;
		graph[a].push(b);
		graph[b].push(a);
	});
	for (let idx = 0; idx < graph.length; idx++) {
		graph[idx].sort((a, b) => a - b);
	}

	// DFS 탐색
	const DFS = vertex => {
		visitedDFS[vertex] = true;
		graphDFS.push(vertex);
		for (let idx = 0; idx < graph[vertex].length; idx++) {
			if (!visitedDFS[graph[vertex][idx]]) {
				DFS(graph[vertex][idx]);
			}
		}
	};
	let graphDFS = [];
	let visitedDFS = Array(N + 1).fill(false);
	DFS(V);
	console.log(graphDFS.join(' '));

	// BFS 탐색
	const BFS = vertex => {
		let queue = [];
		graphBFS.push(vertex);
		queue.push(vertex);
		while (queue.length > 0) {
			let now = queue.shift();
			visitedBFS[now] = true;
			for (let idx = 0; idx < graph[now].length; idx++) {
				let chk = graph[now][idx];
				if (!visitedBFS[chk]) {
					visitedBFS[chk] = true;
					graphBFS.push(chk);
					queue.push(chk);
				}
			}
		}
	};
	let graphBFS = [];
	let visitedBFS = Array(N + 1).fill(false);
	BFS(V);
	console.log(graphBFS.join(' '));

	process.exit();
});

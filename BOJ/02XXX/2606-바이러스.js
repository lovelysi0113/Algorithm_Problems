/**
 * ABOUT
 *
 * DATE: 2021-06-13
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2606
 *
 * COMMENT:
 * 우선 네트워크 상에서 직접 연결되어 있는 컴퓨터의 번호 쌍을 2차원 배열(network)로 표시한다
 * 그리고 queue를 사용하여 1번 컴퓨터부터 연결된 컴퓨터들을 확인한다
 * 한번 방문한 컴퓨터는 visited 표시(true) 하고 바이러스 감염 수를 1 증가 시킨다
 * network 배열을 참조하여 현재 컴퓨터와 연결된 다른 컴퓨터들을 queue에 담아준다
 * queue에 더이상 방문할 컴퓨터가 없을 때 바이러스 감염 수를 출력하면 된다
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
	let computer = parseInt(input[0]) + 1;
	let network = Array.from(Array(computer), () => Array(computer).fill(0));
	input.slice(2).forEach(connect => {
		let [a, b] = connect.split(' ').map(el => parseInt(el));
		network[a][b] = 1;
		network[b][a] = 1;
	});

	let visited = Array(computer).fill(false);
	let virus = -1;

	let queue = [1];
	while (queue.length > 0) {
		let nowComputer = queue.shift();
		if (!visited[nowComputer]) {
			virus += 1;
			visited[nowComputer] = true;
			network[nowComputer].forEach((chk, idx) => {
				if (chk === 1 && !visited[idx]) {
					queue.push(idx);
				}
			});
		}
	}

	console.log(virus);

	process.exit();
});

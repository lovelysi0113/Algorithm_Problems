/**
 * ABOUT
 *
 * DATE: 2021-08-02
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/14499
 *
 * COMMENT:
 * 주사위를 이동시킬 때마다 주사위 배열에서 인덱스 0이 항상 윗면이 되도록 숫자의 위치를 변경해준다
 * 동-서로 이동: 1, 3, 6, 4번 칸의 숫자 변경
 * 북-서로 이동: 1, 2, 6, 5번 칸의 숫자 변경
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
	let [N, M, x, y, K] = input[0];
	let map = input.slice(1, N + 1);

	// 주사위
	let dice = Array(6).fill(0);

	// 동쪽은 1, 서쪽은 2, 북쪽은 3, 남쪽은 4
	const move = { 1: [0, 1], 2: [0, -1], 3: [-1, 0], 4: [1, 0] };
	// 범위를 벗어나는지 확인하는 함수
	const isValid = (x, y) => {
		return 0 <= x && x < N && 0 <= y && y < M;
	};

	let answer = [];

	input[N + 1].forEach(cmd => {
		let [dx, dy] = move[cmd];
		if (isValid(x + dx, y + dy)) {
			// 주사위 이동
			[x, y] = [x + dx, y + dy];
			if (cmd === 1) [dice[0], dice[2], dice[5], dice[3]] = [dice[2], dice[5], dice[3], dice[0]];
			else if (cmd === 2) [dice[0], dice[2], dice[5], dice[3]] = [dice[3], dice[0], dice[2], dice[5]];
			else if (cmd === 3) [dice[0], dice[1], dice[5], dice[4]] = [dice[4], dice[0], dice[1], dice[5]];
			else if (cmd === 4) [dice[0], dice[1], dice[5], dice[4]] = [dice[1], dice[5], dice[4], dice[0]];

			// 주사위 바닥의 숫자, 지도 특정 칸의 숫자 변경
			if (map[x][y] === 0) map[x][y] = dice[5];
			else [dice[5], map[x][y]] = [map[x][y], 0];

			// 주사위의 윗 면에 쓰여 있는 수 출력
			answer.push(dice[0]);
		}
	});

	console.log(answer.join('\n'));

	process.exit();
});

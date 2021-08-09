/**
 * ABOUT
 *
 * DATE: 2021-08-09
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/15684
 *
 * COMMENT:
 * 가로선을 넣어보면서 가로선이 추가된 사다리가 원하는 결과가 나오는지 확인한다
 * 문제에서 추가할 가로선의 개수가 3보다 큰 경우는 -1로 출력하라고 했으므로
 * 가로선을 최대 3개를 추가해보며 사다리를 변경해보면 된다
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
	let [N, M, H] = input[0];
	let ladder = Array.from(Array(H + 1), () => Array(N + 1).fill(0));

	// 가로선 표시. 이때 숫자는 가로선 모양을 표현하고 있음
	// 0: 가로선 없음, 1: 왼 -> 오, 2: 오 -> 왼
	for (let idx = 1; idx < input.length; idx++) {
		let [a, b] = input[idx];
		ladder[a][b] = 1;
		ladder[a][b + 1] = 2;
	}

	// 가로선을 놓을 수 있는 위치 저장
	let empty = [];
	for (let x = 1; x < H + 1; x++) {
		for (let y = 1; y < N; y++) {
			if (ladder[x][y] !== 0 || ladder[x][y + 1] !== 0) continue;
			empty.push([x, y]);
		}
	}
	let len = empty.length;

	// 사다리 게임 실행(i번 위치에서 시작했을 때 도착하는 위치 반환)
	const goDown = col => {
		let row = 1;
		while (row <= H) {
			if (ladder[row][col] === 1) col += 1;
			else if (ladder[row][col] === 2) col -= 1;
			row += 1;
		}
		return col;
	};

	// i번 세로선의 결과가 i번이 나오는지 확인
	const isRight = () => {
		for (let idx = 1; idx <= N; idx++) {
			let result = goDown(idx);
			if (result !== idx) return false;
		}
		return true;
	};

	let answer = -1;

	if (isRight()) {
		// 이미 원하는 결과가 나오는 상황
		answer = 0;
	} else {
		// 가로선 추가하기
		// 가로선 3개 이상 나오면 답을 구할 필요가 없으므로
		// 가로선을 최대 3개까지 넣어서 결과를 확인해보면 된다
		for (let one = 0; one < len; one++) {
			let [x1, y1] = empty[one];
			if (ladder[x1][y1] !== 0 || ladder[x1][y1 + 1] !== 0) continue;
			ladder[x1][y1] = 1;
			ladder[x1][y1 + 1] = 2;
			if (isRight()) {
				if (answer === -1 || answer > 1) answer = 1;
			}
			for (let two = one + 1; two < len; two++) {
				let [x2, y2] = empty[two];
				if (ladder[x2][y2] !== 0 || ladder[x2][y2 + 1] !== 0) continue;
				ladder[x2][y2] = 1;
				ladder[x2][y2 + 1] = 2;
				if (isRight()) {
					if (answer === -1 || answer > 2) answer = 2;
				}
				for (let three = one + 1; three < len; three++) {
					let [x3, y3] = empty[three];
					if (ladder[x3][y3] !== 0 || ladder[x3][y3 + 1] !== 0) continue;
					ladder[x3][y3] = 1;
					ladder[x3][y3 + 1] = 2;
					if (isRight()) {
						if (answer === -1 || answer > 3) answer = 3;
					}
					ladder[x3][y3] = 0;
					ladder[x3][y3 + 1] = 0;
				}
				ladder[x2][y2] = 0;
				ladder[x2][y2 + 1] = 0;
			}
			ladder[x1][y1] = 0;
			ladder[x1][y1 + 1] = 0;
		}
	}

	console.log(answer);

	process.exit();
});

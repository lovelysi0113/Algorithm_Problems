/**
 * ABOUT
 *
 * DATE: 2021-08-04
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/20055
 *
 * COMMENT:
 * 내구도가 0인 칸이 K개가 나올 때까지 문제에서 제시한 단계를 계속 반복한다
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
	let [N, K] = input[0];
	let belt = [...input[1]];
	let robot = Array(N * 2).fill(false);

	// 몇 번째 단계가 진행 중
	let step = 0;
	// 내구도가 0인 칸의 개수
	let zero = 0;

	while (true) {
		step += 1;

		// 1. 벨트가 각 칸 위에 있는 로봇과 함께 한 칸 회전한다.
		belt.unshift(belt.pop());
		robot.unshift(robot.pop());
		// 1-1. 내리는 위치 확인
		if (robot[N - 1]) robot[N - 1] = false;

		// 2. 가장 먼저 벨트에 올라간 로봇부터, 벨트가 회전하는 방향으로 한 칸 이동할 수 있다면 이동한다. 만약 이동할 수 없다면 가만히 있는다.
		for (let idx = 1; idx < N; idx++) {
			let chk = N - idx;
			if (belt[chk] > 0 && robot[chk - 1] && !robot[chk]) {
				[robot[chk - 1], robot[chk]] = [false, true];
				belt[chk] -= 1;
				if (belt[chk] === 0) zero += 1;
			}
			if (robot[N - 1]) robot[N - 1] = false;
		}

		// 3. 올리는 위치에 있는 칸의 내구도가 0이 아니면 올리는 위치에 로봇을 올린다.
		if (belt[0] > 0 && !robot[0]) {
			robot[0] = true;
			belt[0] -= 1;
			if (belt[0] === 0) zero += 1;
		}

		// 4. 내구도가 0인 칸의 개수가 K개 이상이라면 과정을 종료한다. 그렇지 않다면 1번으로 돌아간다.
		if (zero >= K) break;
	}

	console.log(step);

	process.exit();
});

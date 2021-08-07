/**
 * ABOUT
 *
 * DATE: 2021-08-07
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/5557
 *
 * COMMENT:
 * 숫자들을 계산하며 각 결과마다 0~20까지 나올 수 있는 경우의 수를 저장한다(dp)
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
	let N = parseInt(input[0]);
	let nums = input[1].split(' ').map(el => parseInt(el));

	// calculate[i][j]: i번째 숫자까지 계산 한 후 나올 수 있는 결과가 j가 되는 수
	let calculate = Array.from(Array(N - 1), () => Array(21).fill(BigInt(0)));
	calculate[0][nums[0]] = BigInt(1);

	for (let idx = 1; idx < N - 1; idx++) {
		// 숫자 사이에 '+', '-'를 넣기
		for (let chk = 0; chk <= 20; chk++) {
			// idx-1번째 숫자까지 계산한 결과
			prev = calculate[idx - 1][chk];

			if (prev !== 0) {
				// '+' 넣기
				if (chk + nums[idx] <= 20) {
					calculate[idx][chk + nums[idx]] += prev;
				}
				// '-' 넣기
				if (chk - nums[idx] >= 0) {
					calculate[idx][chk - nums[idx]] += prev;
				}
			}
		}
	}

	console.log(calculate[N - 2][nums[N - 1]].toString());

	process.exit();
});

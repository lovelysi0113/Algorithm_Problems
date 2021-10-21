/**
 * ABOUT
 *
 * DATE: 2021-10-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2839
 *
 * COMMENT:
 * N킬로그램 설탕을 배달할 때 최소한의 봉지를 가져가는 방법은 두가지가 있다
 * 1. N-3킬로그램 설탕을 가져가는 방법 + 3킬로그램 설탕 추가
 * 3. N-5킬로그램 설탕을 가져가는 방법 + 5킬로그램 설탕 추가
 * 두 방법 중 봉지 수가 적은 방법을 선택한다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = 0;

rl.on('line', function (line) {
	input = parseInt(line);
}).on('close', function () {
	let sugar = new Array(input + 1).fill(Infinity);
	sugar[3] = 1;
	sugar[5] = 1;

	for (let idx = 6; idx <= input; idx++) {
		sugar[idx] = Math.min(sugar[idx - 3] + 1, sugar[idx - 5] + 1);
	}

	if (sugar[input] === Infinity) {
		console.log(-1);
	} else {
		console.log(sugar[input]);
	}

	process.exit();
});

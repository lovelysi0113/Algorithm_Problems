/**
 * ABOUT
 *
 * DATE: 2021-07-28
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1731
 *
 * COMMENT:
 * 첫번째-두번째 수의 차이와 세번째-두번재 수의 차이가 같으면 등차 수열,
 * 첫번째-두번째 수의 몫과 세번째-두번째 수의 몫이 같으면 등비 수열이다
 * 해당 수열이 등차 수열, 등비 수열인지 찾은 후에 다음으로 올 수를 구하면 된다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(parseInt(line));
}).on('close', function () {
	// 등차수열인지 확인
	let Q = input[2] - input[1];

	if (input[3] - input[2] === Q) {
		// 해당 수열은 등차 수열이다
		console.log(BigInt(input[input.length - 1] + Q).toString());
	} else {
		// 해당 수열은 등비 수열이다
		Q = input[2] / input[1];
		console.log(BigInt(input[input.length - 1] * Q).toString());
	}

	process.exit();
});

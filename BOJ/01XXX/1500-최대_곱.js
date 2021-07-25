/**
 * ABOUT
 *
 * DATE: 2021-07-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1500
 *
 * COMMENT:
 * 각 원소의 합이 S가 되면서 각 원소의 곱이 최대가 되기 위해서는
 * 각 원소가 최대한 같은 값(오차 +- 1)이어야 한다
 * 그런데 계속 런타임 에러 (RangeError)가 나온다ㅠㅠ 좀 더 고민해봐야할듯..!
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
	let [S, K] = input;

	// 최대의 곱이 되는 숫자들의 집합 구하기
	// 1. 값을 똑같이 배분하기
	let nums = Array(K).fill(parseInt(S / K));
	// 2. 남은 수를 1씩 배분하기
	let rest = S % K;
	while (rest > 0) {
		nums[rest] += 1;
		rest -= 1;
	}

	// 최대 곱 계산하기
	let answer = BigInt(1);
	for (let idx = 0; idx < nums.length; idx++) {
		answer *= BigInt(nums[idx]);
	}
	console.log(answer.toString());

	process.exit();
});

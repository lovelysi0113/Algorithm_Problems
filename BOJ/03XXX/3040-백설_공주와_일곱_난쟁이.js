/**
 * ABOUT
 *
 * DATE: 2021-10-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/3040
 *
 * COMMENT:
 * 가짜 난쟁이 2명의 조합을 하나씩 확인하며 나머지 7명의 합이 100이 되는 경우를 찾는다
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
	let total = input.reduce((sum, num) => sum + num, 0);

	// 가짜 난쟁이 찾는 조합
	let fakeGroup = [];
	for (let one = 0; one < 9; one++) {
		for (let two = one + 1; two < 9; two++) {
			fakeGroup.push([one, two]);
		}
	}

	// 일곱 난쟁이 합이 100되는 조합 찾기
	for (let idx = 0; idx < fakeGroup.length; idx++) {
		let [one, two] = fakeGroup[idx];
		let fakeSum = input[one] + input[two];
		if (total - fakeSum === 100) {
			// 일곱 난쟁이 찾음
			let answer = [...input.slice(0, one), ...input.slice(one + 1, two), ...input.slice(two + 1)];
			console.log(answer.join('\n'));
			break;
		}
	}

	process.exit();
});

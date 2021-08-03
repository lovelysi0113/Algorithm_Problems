/**
 * ABOUT
 *
 * DATE: 2021-08-03
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/14888
 *
 * COMMENT:
 * dfs를 사용하여 모든 수에 연산자를 넣어 계산해본다
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
	let ops = input[2].split(' ').map(el => parseInt(el));

	let answer = [-Infinity, Infinity];

	const calculate = (num1, num2, op) => {
		if (op === 0) return num1 + num2;
		if (op === 1) return num1 - num2;
		if (op === 2) return num1 * num2;
		if (op === 3) {
			if (num1 >= 0) return Math.floor(num1 / num2);
			else return -Math.floor(-num1 / num2);
		}
	};

	const dfs = (result, idx, ops) => {
		if (idx === N) {
			answer[0] = Math.max(answer[0], result);
			answer[1] = Math.min(answer[1], result);
			return;
		}
		for (let op = 0; op < 4; op++) {
			if (ops[op] > 0) {
				let nextOps = [...ops];
				nextOps[op] -= 1;
				dfs(calculate(result, nums[idx], op), idx + 1, nextOps);
			}
		}
	};

	dfs(nums[0], 1, ops);

	console.log(answer.join('\n'));

	process.exit();
});

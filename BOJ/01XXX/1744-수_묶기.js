/**
 * ABOUT
 *
 * DATE: 2021-10-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1744
 *
 * COMMENT:
 * 수를 양수, 음수, 0, 1로 나누어서 계산해준다
 * 1) 양수: 내림차순으로 정렬 후 2개씩 묶어서 더해준다
 * 2) 음수: 오름차순으로 정렬 후 2개씩 묶어서 더해준다
 * 3) 1: 1의 갯수만큼 더해준다
 * 4) 0: 0이 있다면 남은 음수와 묶어서 더해준다
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
	// 수 분류
	let plus = [];
	let minus = [];
	let one = 0;
	let zero = 0;

	input.slice(1).forEach(num => {
		if (num > 1) plus.push(num);
		else if (num === 1) one += 1;
		else if (num === 0) zero += 1;
		else minus.push(num);
	});

	// 수 정렬
	plus.sort((a, b) => b - a);
	minus.sort((a, b) => a - b);

	// 수 묶기
	let total = one;
	for (let idx = 0; idx < plus.length; idx += 2) {
		if (plus[idx + 1]) {
			total += plus[idx] * plus[idx + 1];
		} else {
			total += plus[idx];
		}
	}
	for (let idx = 0; idx < minus.length; idx += 2) {
		if (minus[idx + 1]) {
			total += minus[idx] * minus[idx + 1];
		} else {
			if (zero <= 0) {
				total += minus[idx];
			}
		}
	}

	console.log(total);

	process.exit();
});

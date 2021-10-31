/**
 * ABOUT
 *
 * DATE: 2021-10-31
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/20001
 *
 * COMMENT:
 * 문제 수와 고무오리 수를 비교하며 모든 문제를 해결했는지 확인한다
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
	let problem = 0;

	input.slice(1, input.length - 1).forEach(el => {
		if (el === '문제') {
			problem += 1;
		}
		if (el === '고무오리') {
			if (problem === 0) {
				problem += 2;
			} else {
				problem -= 1;
			}
		}
	});

	if (problem === 0) {
		console.log('고무오리야 사랑해');
	} else {
		console.log('힝구');
	}

	process.exit();
});

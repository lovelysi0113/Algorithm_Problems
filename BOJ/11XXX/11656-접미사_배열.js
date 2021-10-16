/**
 * ABOUT
 *
 * DATE: 2021-10-17
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/11656
 *
 * COMMENT:
 * 모든 접미사를 구한 후 오름차순 정렬한다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = '';

rl.on('line', function (line) {
	input = line;
}).on('close', function () {
	let answer = [];

	// 모든 접미사 구하기
	for (let idx = 0; idx < input.length; idx++) {
		answer.push(input.slice(idx));
	}

	// 오름차순 정렬
	answer.sort((a, b) => {
		if (a > b) return 1;
		else if (a === b) return 0;
		else return -1;
	});

	console.log(answer.join('\n'));

	process.exit();
});

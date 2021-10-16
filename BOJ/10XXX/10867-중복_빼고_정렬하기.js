/**
 * ABOUT
 *
 * DATE: 2021-10-17
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/10867
 *
 * COMMENT:
 * 숫자에서 중복을 제거한 후 오름차순으로 정렬한다
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
	let nums = input[1].split(' ').map(el => parseInt(el));

	let answer = [];

	// 중복 제거
	nums.forEach(num => {
		if (!answer.includes(num)) {
			answer.push(num);
		}
	});

	// 오름차순 정렬
	answer.sort((a, b) => a - b);

	console.log(answer.join(' '));

	process.exit();
});

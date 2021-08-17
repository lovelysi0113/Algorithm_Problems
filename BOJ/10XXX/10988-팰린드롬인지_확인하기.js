/**
 * ABOUT
 *
 * DATE: 2021-08-17
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/10988
 *
 * COMMENT:
 * 문자열 처음과 끝부터 하나씩 비교하며 주어진 문자열이 팰린트롬인지 확인해본다
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
	let len = input.length;

	let isPalindrome = true;

	for (let idx = 0; idx <= Math.ceil(len / 2); idx++) {
		if (input[idx] !== input[len - 1 - idx]) {
			isPalindrome = false;
			break;
		}
	}

	if (isPalindrome) {
		console.log(1);
	} else {
		console.log(0);
	}

	process.exit();
});

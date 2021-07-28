/**
 * ABOUT
 *
 * DATE: 2021-07-28
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1371
 *
 * COMMENT:
 * 한 글자씩 확인하며 각 알파벳이 몇 번 나오는지 계산해 그 중에서 가장 많이 나오는 글자가 무엇인지 찾는다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = '';

rl.on('line', function (line) {
	input += line;
}).on('close', function () {
	let alphabet = Array(26).fill(0);

	// 각 알파벳이 몇 번 나오는지 계산
	for (let idx = 0; idx < input.length; idx++) {
		if (input[idx] !== ' ') {
			let ch = input[idx].charCodeAt() - 97;
			alphabet[ch] += 1;
		}
	}

	// 가장 많이 나온 문자 출력
	let max = Math.max(...alphabet);
	let answer = '';
	for (let idx = 0; idx < 26; idx++) {
		if (alphabet[idx] === max) {
			answer += String.fromCharCode(idx + 97);
		}
	}

	console.log(answer);

	process.exit();
});

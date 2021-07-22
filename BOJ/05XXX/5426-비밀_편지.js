/**
 * ABOUT
 *
 * DATE: 2021-07-23
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/5426
 *
 * COMMENT:
 * 편지의 내용을 정사각형(2차원 배열)에 넣고 반시계방향으로 90도 회전시킨다
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
	let answer = [];

	input.slice(1).forEach(el => {
		let len = Math.sqrt(el.length);
		// 암호화한 편지
		let letter = [];
		for (let idx = 0; idx < el.length; idx += len) {
			letter.push(el.slice(idx, idx + len).split(''));
		}

		// 원래 내용을 구하기
		let result = '';
		for (let y = len - 1; y >= 0; y--) {
			for (let x = 0; x < len; x++) {
				result += letter[x][y];
			}
		}

		answer.push(result);
	});

	console.log(answer.join('\n'));

	process.exit();
});

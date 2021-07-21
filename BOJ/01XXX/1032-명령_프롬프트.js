/**
 * ABOUT
 *
 * DATE: 2021-07-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1032
 *
 * COMMENT:
 * 파일의 이름을 하나씩 검사하며 모든 파일의 같은 자리에 있는 글자가 모두 같은지 확인한다
 * 만약 다르면 '?'를 넣는다
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
	let answer = '';

	for (let idx = 0; idx < input[1].length; idx++) {
		let isSame = true;
		let chkCh = input[1][idx];
		for (let num = 2; num <= parseInt(input[0]); num++) {
			if (chkCh !== input[num][idx]) {
				isSame = false;
				break;
			}
		}
		if (isSame) {
			answer += chkCh;
		} else {
			answer += '?';
		}
	}

	console.log(answer);

	process.exit();
});

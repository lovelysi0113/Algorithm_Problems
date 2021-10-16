/**
 * ABOUT
 *
 * DATE: 2021-10-16
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1977
 *
 * COMMENT:
 * Math.sqrt() 함수로 제곱근을 구하고 이를 정수로 바꾼 값과 기존값이 같은지 확인한다
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
	let [M, N] = input;

	let answer = 0;
	let minNum = 0;

	for (let num = M; num <= N; num++) {
		let chk = Math.sqrt(num);
		if (chk === parseInt(chk)) {
			if (answer === 0) {
				minNum = num;
			}
			answer += num;
		}
	}

	if (answer === 0) {
		console.log(-1);
	} else {
		console.log(answer);
		console.log(minNum);
	}

	process.exit();
});

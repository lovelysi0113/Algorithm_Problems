/**
 * ABOUT
 *
 * DATE: 2021-07-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2605
 *
 * COMMENT:
 * 학생 한명씩 뽑은 숫자를 확인하여 줄을 세운다
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
	let n = parseInt(input[0]);
	let number = input[1].split(' ').map(el => parseInt(el));

	let line = [];

	for (let student = 1; student <= n; student++) {
		let move = number[student - 1];
		if (move === 0) {
			// 0이면 마지막에 서기
			line.push(student);
		} else {
			// 뽑은 숫자만큼 앞으로 가기
			line = [...line.slice(0, move * -1), student, ...line.slice(move * -1)];
		}
	}

	console.log(line.join(' '));

	process.exit();
});

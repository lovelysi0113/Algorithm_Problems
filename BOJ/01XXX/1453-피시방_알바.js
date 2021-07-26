/**
 * ABOUT
 *
 * DATE: 2021-07-26
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1453
 *
 * COMMENT:
 * 자리에 없으면 false, 있으면 true로 표시하여 손님들을 차례대로 자리에 앉게 한다
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
	let computer = Array(101).fill(false);

	let answer = 0;
	input[1].split(' ').forEach(el => {
		let num = parseInt(el);
		if (!computer[num]) {
			// 자리에 사람이 없으면 그 손님은 그 자리에 앉아서 컴퓨터를 할 수 있음
			computer[num] = true;
		} else {
			// 사람이 있다면 거절당한다
			answer += 1;
		}
	});

	console.log(answer);

	process.exit();
});

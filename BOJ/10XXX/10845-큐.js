/**
 * ABOUT
 *
 * DATE: 2021-10-28
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/10845
 *
 * COMMENT:
 * 명령을 처리하는 프로그램을 구현한 후 실제로 명령을 실행한다
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
	// 큐 구현, 명령을 처리하는 프로그램
	let queue = [];
	let program = {
		push: X => {
			queue.push(X);
		},
		pop: () => {
			if (queue.length === 0) return -1;
			else return queue.shift();
		},
		size: () => {
			return queue.length;
		},
		empty: () => {
			if (queue.length === 0) return 1;
			else return 0;
		},
		front: () => {
			if (queue.length === 0) return -1;
			else return queue[0];
		},
		back: () => {
			if (queue.length === 0) return -1;
			else return queue[queue.length - 1];
		},
	};

	// 명령 실행
	let answer = [];
	input.slice(1).forEach(el => {
		if (el.slice(0, 4) === 'push') {
			let value = parseInt(el.split(' ')[1]);
			program.push(value);
		} else {
			answer.push(program[el]());
		}
	});

	console.log(answer.join('\n'));

	process.exit();
});

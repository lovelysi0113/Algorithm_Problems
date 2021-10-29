/**
 * ABOUT
 *
 * DATE: 2021-10-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/10866
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
	// 덱 구현, 명령을 처리하는 프로그램
	let deque = [];
	let program = {
		push_front: X => {
			deque.unshift(X);
		},
		push_back: X => {
			deque.push(X);
		},
		pop_front: () => {
			if (deque.length === 0) return -1;
			else return deque.shift();
		},
		pop_back: () => {
			if (deque.length === 0) return -1;
			else return deque.pop();
		},
		size: () => {
			return deque.length;
		},
		empty: () => {
			if (deque.length === 0) return 1;
			else return 0;
		},
		front: () => {
			if (deque.length === 0) return -1;
			else return deque[0];
		},
		back: () => {
			if (deque.length === 0) return -1;
			else return deque[deque.length - 1];
		},
	};

	// 명령 실행
	let answer = [];
	input.slice(1).forEach(el => {
		if (el.slice(0, 4) === 'push') {
			let [cmd, value] = el.split(' ');
			program[cmd](value);
		} else {
			answer.push(program[el]());
		}
	});

	console.log(answer.join('\n'));

	process.exit();
});

/**
 * ABOUT
 *
 * DATE: 2021-10-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/15500
 *
 * COMMENT:
 * 3번 기둥으로 옮겨야 하는 원판 중 가장 큰 번호의 원판이 있는 기둥을 찾아
 * 원판 위 다른 원판들을 다른 기둥으로 옮겨준다
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
	let N = parseInt(input[0]);
	let hanoi = [[], [], [], []];
	hanoi[1] = input[1].split(' ').map(el => parseInt(el));

	let answer = [];

	// 옮기기
	while (N > 0) {
		let now = hanoi[1].includes(N) ? 1 : 2;
		let move = now === 1 ? 2 : 1;
		while (hanoi[now][hanoi[now].length - 1] !== N) {
			hanoi[move].push(hanoi[now].pop());
			answer.push(`${now} ${move}`);
		}
		hanoi[3].push(hanoi[now].pop());
		answer.push(`${now} ${3}`);
		N -= 1;
	}

	console.log(answer.length);
	console.log(answer.join('\n'));

	process.exit();
});
